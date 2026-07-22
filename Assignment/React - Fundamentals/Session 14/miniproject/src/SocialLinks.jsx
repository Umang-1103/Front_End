// Task 2
import React from "react";

function SocialLinks({ links, theme = "light" }) {
  const style = {
    backgroundColor: theme === "dark" ? "#333" : "#f4f4f4",
    color: theme === "dark" ? "white" : "black",
    padding: "15px",
    borderRadius: "10px",
    marginTop: "20px",
  };

  return (
    <div style={style}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          style={{
            margin: "10px",
            textDecoration: "none",
            color: theme === "dark" ? "white" : "blue",
            fontSize: "20px",
          }}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;