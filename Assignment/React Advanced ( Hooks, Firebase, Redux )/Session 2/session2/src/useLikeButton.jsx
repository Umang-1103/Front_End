import { useState } from "react";

function useLikeButton(initialCount = 0) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(initialCount);

  const toggleLike = () => {
    if (liked) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }

    setLiked(!liked);
  };

  return {
    liked,
    count,
    toggleLike,
  };
}

export default useLikeButton;