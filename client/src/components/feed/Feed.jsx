import {useEffect, useState, useContext} from "react";
import axios from "axios"
import "./feed.css"
import Share from "../../components/share/Share"
import Post from "../../components/post/Post"
import {AuthContext} from "../../context/AuthContext"


export default function Feed({username}) {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext)

    const fetchPosts = async ()=>{
      const res = username ?  
      await axios.get("/posts/profile/" + username) : await axios.get("/posts/timeline/" + user._id)
     setPosts(
       res.data.sort((p1,p2)=>{
       return new Date(p2.createdAt) - new Date(p1.createdAt)
     }))
   
    };

    useEffect(()=>{
      fetchPosts()    
    },[username, user._id])


    const deleteHandler = async(id)=>{

      try{
       const findPost = await posts.find(post =>post._id === id)
       const deletedPost =  await axios.delete("/posts/"+findPost._id, 
         {data:{userId: findPost.userId}
      })

      console.log(deletedPost)
    
      }
      catch(err){
            console.log(err)
      }
    
      fetchPosts()
 
  }

  return (
    <div className="feed">

      <div className="feedWrapper">
       { (!username || username === user.username) && <Share/>}
        {posts.map(p=>(
        <Post key={p._id} post={p} deleteHandler={deleteHandler}/>
        ))}
        
      </div>
    </div>
  )
}
