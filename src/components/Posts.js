import Post from "./Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
     {Posts.map((p)=>(
        <Post post={p} className="post" />
      ))}
    </div>
  )
}
