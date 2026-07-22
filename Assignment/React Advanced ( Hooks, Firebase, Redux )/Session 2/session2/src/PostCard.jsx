import React from "react";
import useLikeButton from "./useLikeButton";

function PostCard() {
  const {
    liked,
    count,
    toggleLike,
  } = useLikeButton(120);

  return (
    <div className="container">
      <h2>Beautiful Sunset 🌅</h2>

      <p>{count} Likes</p>
      <button onClick={toggleLike}>
        {liked ? "❤️ Unlike" : "🤍 Like"}
      </button>

    </div>
  );
}

export default PostCard;