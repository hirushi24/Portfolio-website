"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <Image src="/images/skills.png" width={300} height={200} />
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BSc (Hons) Computer Science - University of Westminster, UK.</li>
        <br></br>
        <li>Foundation Certificate in Computing - Informatics Institute of Technology(IIT), Sri Lanka.</li>
        <br></br>
        <li>Primary & High school - Holy Cross College, Gampaha.</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Foundation Certificate of Higher Education.</li>
        <li>Agile Foundations - Issues by Linkedin</li>
        <li>Figma for UX Design - Issues by Linkedin</li>
        <li>Introduction to Web Design and Development - Issues by Linkedin</li>
        <li>Principles for UX Design - Issues by Linkedin</li>
        <li>Get started with Figma - Issues by Coursera</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src="/images/hirushi.jpg" width={500} height={600} style={{ borderRadius: '30%', objectFit: 'cover', border: '8px solid #520160' }} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
  I am a dedicated second-year Computer Science student with 
  a strong passion for the IT industry, aiming to specialize 
  in UI/UX Design. Proficient in Figma and Axure, I prioritize 
  attention to detail and excel in collaborative team environments. 
  My expertise extends to front-end development, showcasing strong 
  HTML, CSS, and JavaScript skills. Committed to mastering design 
  and development, I am poised to contribute effectively to the 
  creation of innovative and seamless digital experiences.
</p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
