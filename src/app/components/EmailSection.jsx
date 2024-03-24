"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="flex justify-center items-center my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 text-center">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h5 className="text-xl font-bold text-white my-2">
          Let's Connect
        </h5>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="text-[#ADB7BE] mb-4 max-w-md mx-auto">
          Hello! Thank you for visiting my portfolio. I'm enthusiastic about forging new connections and exploring opportunities for collaboration. As a dedicated student, I'm committed to continuous learning and growth. Your insights and feedback are invaluable to me. Feel free to reach out, and I'll do my utmost to respond promptly.
          <br /><br />
          I am passionate about expanding my knowledge and refining my skills in the ever-evolving landscape of technology. Your guidance and suggestions contribute significantly to my journey. Don't hesitate to contact me, and I'll ensure to provide timely and thoughtful responses.
        </p>

        <div className="socials flex justify-center gap-2">
          <Link href="https://github.com/hirushi24">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/hirushi-silva-684772270">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
