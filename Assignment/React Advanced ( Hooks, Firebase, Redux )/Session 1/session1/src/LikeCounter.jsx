import React, { useState } from "react";

function LikeCounter() {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>❤️ Likes: {likes}</h2>

            <button onClick={handleLike}>
                Like
            </button>
        </div>
    );
}

export default LikeCounter;