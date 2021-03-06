import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { Link } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import {useHistory} from "react-router"

export default function Topbar() {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const {user} = useContext(AuthContext);
  const history = useHistory()
  console.log(history)

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Oliviasocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input placeholder="search for friend, post or video " className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>ß  
          <Link to="/login" style={{textDecoration:"none"}}>
            <span className="topbarLink">Log In </span></Link>     
          <span className="topbarLink" style={{textDecoration:"none"}} onClick={()=> history.push("/register")}>Sign Up</span> 
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">
              1
              </span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">
              2
              </span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">
              1
              </span>
          </div>
        </div>
        <Link to = {`/profile/${user.username}`}>
        <img  src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" className="topbarImg" />
        </Link>
      

       
      </div>
    </div>



  )
}
