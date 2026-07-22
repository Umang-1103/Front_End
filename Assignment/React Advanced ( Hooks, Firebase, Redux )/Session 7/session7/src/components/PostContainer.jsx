import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


const PostContainer = () => {

    const { theme } = useContext(ThemeContext);

    return (

        <div
            style={{
                background: theme === "light" ? "#fafafa" : "#222222",

                padding: "20px"}}>
            <h3>Nested Post Content</h3>
            <p>This component directly uses ThemeContext.</p>
        </div>
    );
};

export default PostContainer;