import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useContext, useState} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,

} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
// import ProtectedRoute from "./pages/ProtectedRoute"


function App() {
  const {user} = useContext(AuthContext)
  const [isAuth, setIsAuth] = useState(false)
  return (
<Router>
  <Switch>
    <Route exact path="/">
    { user? <Home/> :  <Register/>}
    </Route>
    <Route path="/login">
   { user? < Redirect to="/" /> :< Login /> }
    </Route>
    <Route path="/register">  
    { user? < Redirect to="/" /> :  <Register/>}
    </Route>
    <Route path="/profile/:username">
    <Profile/>
    </Route>
    {/* <Route>
      <ProtectedRoute path="/login" component={Login} isAuth={setIsAuth(true)} />
    </Route> */}
  </Switch>
</Router>
  );
}

export default App;