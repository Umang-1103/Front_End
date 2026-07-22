// Task 5
import React from "react";

function ProjectCard({
  title,
  description,
  image,
  link,
}) {
  return (
    <div
      style={{
        // width: "300px",
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "10px",
        margin: "20px auto",
      }}
    >
      <img
        src={image}
        alt={title}
        width="100%"
      />

      <h2>{title}</h2>

      <p>{description}</p>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <button>View Project</button>
      </a>
    </div>
  );
}

export default ProjectCard;