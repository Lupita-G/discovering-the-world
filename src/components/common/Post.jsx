import "../styles/Post.css";
import Comments from "./Comments";

const Post = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-image">
        <img src={post.img} alt={post.title} />
      </div>
      <div className="post-content">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <p className="category">{post.category}</p>
      </div>
      <Comments/>
    </div>
  );
};

export default Post;
