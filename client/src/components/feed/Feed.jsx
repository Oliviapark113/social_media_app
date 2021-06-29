import {useEffect, useState} from "react";
import axios from "axios"
import "./feed.css"
import Share from "../../components/share/Share"
import Post from "../../components/post/Post"
// import {Posts} from "../../dummyData"

export default function Feed({username}) {
    const [posts, setPosts] = useState([]);


    useEffect(()=>{
      const fetchPosts = async ()=>{

        const res = username ?  
        await axios.get("/posts/profile/" + username) : await axios.get("/posts/timeline/60d3de3e1e319a11c845e87b")
       setPosts(res.data)
     
      };

      fetchPosts()
     
    },[username])
  return (
    <div className="feed">

      <div className="feedWrapper">
        <Share/>
        {posts.map(p=>(
        <Post key={p._id} post={p}/>
        ))}
        
      </div>
    </div>
  )
}
