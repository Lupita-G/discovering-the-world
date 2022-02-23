import React, { useContext } from "react";
import Post from "./Post";
import { postsContext } from "../context/posts-context";
import { useParams } from "react-router-dom";

const Postlist = () => {
  const { category } = useParams();
  const { posts } = useContext(postsContext);
  console.log(category);

  return (
    <div style={{ display: "Flex", justifyContent: "center" }}>
      <div className="post-section">
        {category === "all"
          ? posts.map((post) => <Post key={post.id} post={post} />)
          : posts
              .filter((post) => post.category === category)
              .map((post) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Postlist;
