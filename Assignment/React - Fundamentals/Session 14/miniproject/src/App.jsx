import React from "react";
import "./App.css";
import ProfileCard from "./ProfileCard";
import SocialLinks from "./SocialLinks";
import ProjectCard from "./ProjectCard";

function App() {
  // Task 3 & 4
  const socialMedia = [
    {
      icon: "📷 Instagram",
      url: "https://instagram.com",
    },
    {
      icon: "💼 LinkedIn",
      url: "https://linkedin.com",
    },
    {
      icon: "💻 GitHub",
      url: "https://github.com",
    },
  ];

  return (
    <div className="container" >
      <div style={{
        width: "500px",
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "10px",
        margin: "20px auto",
      }}>


        <ProfileCard
          name="Jane Doe"
          image="https://i.pravatar.cc/200"
          bio="Frontend Developer | React Developer | JavaScript Enthusiast"
        />

        <SocialLinks
          links={socialMedia}
          theme="dark"
        />
     
      <ProjectCard
        title="Portfolio Website"
        description="A responsive portfolio built with React."
        image="https://picsum.photos/300/200"
        link="https://github.com"
      />
       </div>
    </div>
  );
}

export default App;