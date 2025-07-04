import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  color
}) => {
  // Determine color-specific styles
  let gradientStyle, borderGradient, progressWidth, accentColor;
  
  switch(color) {
    case 'green':
      gradientStyle = {
        background: 'radial-gradient(ellipse at right top, #107667ed 0%, #151419 47%, #151419 100%)'
      };
      borderGradient = 'linear-gradient(45deg, #232228, #232228, #232228, #232228, #01c3a8)';
      progressWidth = '90%';
      accentColor = '#01c3a8';
      break;
    case 'blue':
      gradientStyle = {
        background: 'radial-gradient(ellipse at right top, #00458f8f 0%, #151419 45%, #151419 100%)'
      };
      borderGradient = 'linear-gradient(45deg, #232228, #232228, #232228, #232228, #1890ff)';
      progressWidth = '20%';
      accentColor = '#1890ff';
      break;
    case 'orange':
      gradientStyle = {
        background: 'radial-gradient(ellipse at right top, #ffb74194 0%, #151419 47%, #151419 100%)'
      };
      borderGradient = 'linear-gradient(45deg, #232228, #232228, #232228, #232228, #ffb741)';
      progressWidth = '30%';
      accentColor = '#ffb741';
      break;
    case 'red':
      gradientStyle = {
        background: 'radial-gradient(ellipse at right top, #a63d2a82 0%, #151419 47%, #151419 100%)'
      };
      borderGradient = 'linear-gradient(45deg, #232228, #232228, #232228, #232228, #a63d2a)';
      progressWidth = '50%';
      accentColor = '#a63d2a';
      break;
    default:
      gradientStyle = {
        background: 'radial-gradient(ellipse at right top, #107667ed 0%, #151419 47%, #151419 100%)'
      };
      borderGradient = 'linear-gradient(45deg, #232228, #232228, #232228, #232228, #01c3a8)';
      progressWidth = '90%';
      accentColor = '#01c3a8';
  }

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="project-card-wrapper"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="project-card"
        style={gradientStyle}
      >
        {/* Border gradient */}
        <div 
          className="card-border-gradient"
          style={{ background: borderGradient }}
        />
        
        {/* Card Header */}
        <div className="card-header">
        
          <svg className="star-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </div>
        
        {/* Card Body */}
        <div className="card-body">
          <h3>{name}</h3>
          <p>{description}</p>
          
        
        </div>
        
        {/* Card Footer */}
        <div className="card-footer">
          <div className="team-members">
            <div className="avatar"></div>
            <div className="avatar"></div>
            <div className="avatar"></div>
          
          </div>
          <a 
  href={source_code_link} 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button 
    className="btn-countdown"
    style={{ 
      '--hover-color': accentColor 
    }}
  >
    View Project
  </button>
</a>

        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const projects = [
    {
      name: "Epic-Arena",
      description: "A comprehensive event management platform utilizing the MERN stack to manage all college events with real-time tracking and a responsive user interface ",
      tags: [{ name: "React", color: "text-blue-500" }],
      image: "",
      source_code_link: "https://github.com/arnavhemdan/Epic_Arena",
      color: "green"
    },
    {
      name: "scholar",
      description: "Web application used to enroll in diffrent courses  A modern educational website representing a physical learning institute. It showcases multiple offline courses with detailed information and updates.",
      tags: [{ name: "MERN ", color: "text-purple-500" }],
      image: "",
      source_code_link: "https://www.scholarsitech.com/",
      color: "blue"
    },
    {
      name: "Quizify-AI",
      description: "Quizify-AI is an AI-driven platform aimed at transforming learning and evaluation by Condensing academic notes to highlight essential concepts for better understanding. Creating customized MCQs based on the condensed content for streamlined self-assessment and testing.",
      tags: [{ name: "Flash,NLP", color: "text-green-500" }],
      image: "",
      source_code_link: "https://github.com/arnavhemdan/Quizify-AI",
      color: "orange"
    },
    // {
    //   name: "Task Management",
    //   description: "Team collaboration tool with Kanban boards and notifications.",
    //   tags: [{ name: "Angular", color: "text-red-500" }],
    //   image: "",
    //   source_code_link: "#",
    //   color: "red"
    // }
  ];

  return (
    <div className="works-container">
      <motion.div variants={textVariant()}>
        <p className="section-subtitle">My work</p>
        <h2 className="section-title">Projects.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="section-description"
      >
        <p>
These projects highlight my expertise and hands-on experience through practical implementations.
Each project includes a brief overview and demonstrates my problem-solving abilities, proficiency with various technologies, and capability to manage and execute tasks efficiently.        </p>
      </motion.div>

      <div className="cards-grid">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Works;