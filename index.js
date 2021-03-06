const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const path = require("path");
const PORT = process.env.PORT || 8800;

dotenv.config();

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/social',
  {  useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false},
  () => {
    console.log("Connected to MongoDB");
  }
);


app.use("/images", express.static(path.join(__dirname, "/public/images")));

//middleware
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);
app.use(morgan("common"));
// Define middleware here
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // Serve up static assets (usually on heroku)
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

// Serve up static assets (usually on heroku)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log("Backend server is running!");
});