import React, { useContext } from "react";
import { UserContext } from "./App";

function LikeButton() {
    const user = useContext(UserContext);

    return (
        <div>
            <h4>User Name: {user.name}</h4>
            <h3>User's age: {user.age}</h3>
            {/* <button>Like</button> */}
        </div>
    );
}

export default LikeButton;