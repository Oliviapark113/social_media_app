import "./post.css"
import {MoreVert} from "@material-ui/icons"
// import {Users} from "../../dummyData"
import {useState, useEffect} from "react"
import axios from "axios"
import {format} from "timeago.js"
import {Link} from "react-router-dom"

export default function Post({post}) {
    // console.log(post)
    // const user = Users.filter(u=>u.id===1)
    // console.log(user[0].username)

    const [like, setLike] = useState(post.likes.length)
    const [isliked, setIsliked] = useState(false)
    const [user, setUser] = useState({})

    const likeHandler = ()=>{
        setLike(isliked ? like-1 : like+1)
        setIsliked(!isliked)
    }
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(()=>{
        const fetchUser = async ()=>{
  
         const res = await axios.get(`/users?userId=${post.userId}`)
         setUser(res.data)
        //   console.log(res)
        };
  
        fetchUser()
       
      },[post.userId])

      console.log(user)
  return (
   
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`profile/${user.username}`}>
                    <img className="postProfileImg" src= {user.profilePicture || PF+"person/noAvatar.png"} alt=""/>
                    </Link>
                    <span className="postUsername">
                        {user.username}
                    </span>
                    <span className="postDate">{format(post.createdAt)}</span>

                </div>
                <div className="postTopRight">
                  <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc} </span>
                <img className="postImg" src={PF+post.img} alt=""/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src={`${PF}like.png`}onClick={likeHandler} alt=""/>
                    <img className="likeIcon" src={`${PF}heart.png`}onClick={likeHandler} alt=""/>
                    <span className="postlikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>

        </div>
      
    </div>
  )
}
