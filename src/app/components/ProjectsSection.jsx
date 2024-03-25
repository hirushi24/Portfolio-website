"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "This is a portfolio website built with Next.js and Tailwind CSS. It showcases your skills, projects, and achievements in an elegant and responsive design.",
    image: "/images/projects/1.png",
    tag: ["All", "Front-end"],
    gitUrl: "https://github.com/hirushi24/Portfolio-website.git",
  },
  {
    id: 2,
    title: "Burger Queue Management System",
    description: "Created a Java-based Queue Management System with features including customer initialization, viewing, adding, and removal from queues, utilizing arrays and classes for customer management, enabling alphabetical sorting of names, tracking burger stock, and implementing file operations for data storage and retrieval.",
    image: "/images/projects/2.png",
    tag: ["All", "Back-end"],
    gitUrl: "https://github.com/hirushi24/Burger-Queue-Management-System.git",
  },
  {
    id: 3,
    title: "Melodeez Music Website",
    description: " Designed and developed an engaging Music Website incorporating HTML, CSS, and JavaScript, featuring an interactive quiz for enhanced user engagement and interaction. ",
    image: "/images/projects/3.png",
    tag: ["All", "Front-end"],
    gitUrl: "https://github.com/Sasandaragu/Melodeez.git",
  },
  {
    id: 4,
    title: "Online Shopping System",
    description: " Designed and implemented a robust object oriented structure adhering to Inheritance and Encapsulation principles.",
    image: "/images/projects/4.png",
    tag: ["All", "Back-end"],
    gitUrl: "https://github.com/hirushi24/Online-Shopping-System.git",
  },
  {
    id: 5,
    title: "Vehicle Repairo Mobile and Web Application",
    description: " This is a group project. We made a mobile application and a web application. We used python for the backend and the react native and react.js for the frontend.",
    image: "/images/projects/5.png",
    tag: ["All", "Front-end","Back-end"],
    gitUrl: "https://github.com/VehicleRepairo/vehicle-repairo-back-end.git",
    previewUrl: "https://vehicle-repairo-mechanic-cs-69.vercel.app/",
  },
  {
    id: 6,
    title: "To-Do-List",
    description: "This is a simple to-do-list. It is designed by using HTML, CSS, and Javascript.",
    image: "/images/projects/6.png",
    tag: ["All", "Front-end"],
    gitUrl: "https://github.com/hirushi24/my-to-do-list.git", 
    previewUrl: "https://my-to-do-list-ruby.vercel.app/",
  },
  {
    id: 7,
    title: "Calculator",
    description: "This is a simple calculator. It is designed by using HTML, CSS, and Javascript.",
    image: "/images/projects/7.png",
    tag: ["All", "Front-end"], 
    gitUrl: "https://github.com/hirushi24/Calculator.git",
    previewUrl: "https://calculator-ebon-xi.vercel.app/",
  },
    {
      id: 8,
      title: "FOODIESPOT Recipe App Design Design",
      description: "This project demonstrates proficiency in UI/UX design principles, accessibility considerations, customization features, and a comprehensive approach to user engagement in the culinary world through a well-crafted high-fidelity prototype in Figma",
      image: "/images/projects/8.png",
      tag: ["All", "UI/UX Designs"],
      figmaLink: "https://www.figma.com/file/Uy3GJYQWcOEFjofGHm6TuR/FOODIESPOT?type=design&node-id=0%3A1&mode=design&t=tgYeAccABJvX5i8x-1"
    },
    {
      id: 9,
      title: "Coffee Ordering App Design",
      description: "This UI/UX design project showcases expertise in creating an engaging and user-centric experience for a coffee-ordering app, emphasizing usability, aesthetics, and accessibility.",
      image: "/images/projects/9.png",
      tag: ["All", "UI/UX Designs"],
      figmaLink: "https://www.figma.com/file/sjPkGzfuwFSaqV1iAl6YOu/Coffee-ordering-app?type=design&node-id=0%3A1&mode=design&t=HUQWUzF0tpQhQ8It-1"
    },
    {
      id: 10,
      title: "Planto Web Design",
      description: "This UI/UX design project showcases expertise in creating an engaging and user-centric experience for a planto, emphasizing usability, aesthetics, and accessibility.",
      image: "/images/projects/10.png",
      tag: ["All", "UI/UX Designs"],
      figmaLink: "https://www.figma.com/file/g46hTfktlSE9uFC28cqYDV/Planto-web?type=design&node-id=0%3A1&mode=design&t=8IqBYYdgq5irPMH4-1"
    },
  ];
  

  const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
  
    return (
      <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Back-end"
            isSelected={tag === "Back-end"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Front-end"
            isSelected={tag === "Front-end"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="UI/UX Designs"
            isSelected={tag === "UI/UX Designs"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl} // This should be figmaLink for projects 7, 8, and 9
                figmaLink={project.figmaLink} 
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default ProjectsSection;
