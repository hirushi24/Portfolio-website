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
 I am a motivated final-year Computer Science student with a strong interest 
 in the IT industry and modern software solutions. I have hands-on experience 
 with design tools such as Figma and a solid understanding of web technologies. 
 I pay close attention to detail and work effectively in collaborative team environments. 
 Passionate about both design and development, I aim to contribute to creating efficient,
 user-friendly, and innovative digital systems.
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
