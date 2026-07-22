import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import UserSection from "./UserSection";


const PostCard = () => {


    const { theme } = useContext(ThemeContext);

    return (
        <div
            style={{
                background: theme === "light" ? "#eee" : "#333",
                color: theme === "light" ? "#000" : "#fff",
                        padding: "20px",margin: "20px"}}>
            <h3>Post Card</h3>

            <UserSection />
        </div>
    );

};

export default PostCard;