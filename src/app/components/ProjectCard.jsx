import React, { useState } from "react";

const ProjectCard = ({ title, description, imgUrl, gitUrl, figmaLink, previewUrl }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className="border border-purple-500 rounded-xl shadow-md relative overflow-hidden"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <img className="w-full" src={imgUrl} alt={title} />
      <div
        className={`${
          showDescription ? "block" : "hidden"
        } absolute inset-0 bg-black bg-opacity-100 text-white p-6 flex justify-center items-center`}
      >
        <div>
          <p className="text-justify">{description}</p>
          {figmaLink && (
            <div className="mt-6">
            <a href={figmaLink} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Figma Link</a>
            </div>
          )}
          {gitUrl && (
            <div className="mt-6">
              <a href={gitUrl} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">GitHub URL</a>
            </div>
          )}
          <br /> 
          {previewUrl && (
            <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Preview URL</a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
