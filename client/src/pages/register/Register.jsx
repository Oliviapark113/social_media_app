import "./register.css"
import {useRef, useContext} from "react"
import axios from "axios"
import { useHistory } from "react-router";
import { AuthContext } from "../../context/AuthContext";

export default function Register() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();
    const {user} = useContext(AuthContext)
    const handleClick = async (e)=> { 
      e.preventDefault();
      console.log("I am submitting")
      if(passwordAgain.current.value !== password.current.value){
          password.current.setCustomValidity("Password don't match");
      }
      else {
          const currentUser = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
          
          };
          try{
     
            await axios.post("/auth/register", currentUser)
       
          }
          catch(err){
              console.log(err)
          }
          
      }
    
    }


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
                    <input placeholder="Username" required ref={username} className="loginInput"/>
                    <input placeholder="Email" type="email" required ref={email} className="loginInput"/>
                    <input placeholder="Password" minLength="6" type="password" required ref={password} className="loginInput"/>
                    <input placeholder="Password Again" required ref={passwordAgain}  className="loginInput"/>
               <button className="loginButton" type="submit">Sign Up</button>
             
               <button className="loginRegisterButton"  onClick={()=>history.push("/login")}>Log into Account</button>
              

                </form>
            </div>

        </div>
      
    </div>
  )
}
