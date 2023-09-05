import { Link } from "react-router-dom"
import "./post.css"

const Post = ({post}) => {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img 
         className="postimg"
         src={PF+post.photo}
         alt="" 
        />
      )}
      <div className="postInfo">
      <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
        <span className="postTitle"> 
          {post.title}
        </span>
        </Link>
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        <hr/>
      </div>
      <p className="postDesc">
       {post.desc}
      </p>
    </div>
  )
}

export default Post