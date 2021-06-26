import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const { user } = useContext(AuthContext);
  return (
     <Router>
       <Switch>
         <Route>
           
         </Route>
       </Switch>
     </Router>
  );
}

export default App;