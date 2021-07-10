import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useContext } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,

} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext)

  return (
<Router>
  <Switch>
    <Route   path="/">
    { user? <Home/> :  <Register/>}
    </Route>
    <Route path="/login">
   {/* { user? < Redirect to="/" /> : <Login/>} */}
   <Login/>
    </Route>
    <Route path="/register">  
    {/* { user? < Redirect to="/" /> :  <Register/>} */}
    <Register/>
    </Route>
    <Route path="/profile/:username">
    <Profile/>
    </Route>
  </Switch>
</Router>
  );
}

export default App;