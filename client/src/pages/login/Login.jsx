import "./login.css"
import { useRef, useContext} from "react";
import {loginCall} from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext";
import  {CircularProgress} from "@material-ui/core"
// import {withRouter} from "react-router-dom"


 function Login() {

    const email = useRef();
    const password = useRef();
  

    const {user, isFetching, isAuth, dispatch} = useContext(AuthContext)

    const handleClick =(e)=>{
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch)
    }

 console.log(isAuth, user)
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Oliviasocial</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Oliviasocial.
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="email" 
                    type="Email"
                    ref={email} 
                    required
                    className="loginInput" />
                    <input placeholder="password" type="Password" 
                    ref={password}
                    minLength="6"  
                    required 
                    className="loginInput" />
               <button className="loginButton" type="submit" disabled ={isFetching}>{isFetching ? <CircularProgress color="white" size="20px"/> : "Log In"}</button>
               <span className="loginForgot">Forgot Password?</span>
               <button className="loginRegisterButton">
               {isFetching ? <CircularProgress color="white" size="20px"/> : "Create a New Account"}
                   </button>

                </form>
            </div>

        </div>
      
    </div>
  )
}

export default Login