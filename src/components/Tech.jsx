import React, { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, education } from "../constants";

const Tech = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div className="w-full flex flex-col items-center">
      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-10">
        <button
          onClick={() => setActiveTab("skills")}
          className={`px-6 py-2 rounded-full font-bold transition-all ${
            activeTab === "skills"
              ? "bg-violet-950 text-black shadow-md"
              : "bg-white text-black border border-white"
          }`}
        >
          Skills
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`px-6 py-2 rounded-full font-bold transition-all ${
            activeTab === "education"
              ? "bg-violet-950 text-black shadow-md"
              : "bg-white text-black border border-white"
          }`}
        >
          Education
        </button>
      </div>

      {/* Content Section */}
      {activeTab === "skills" ? (
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-10 w-full max-w-3xl">
          {education.map((edu, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-4 h-4 rounded-full bg-green-300 mt-2 border-2 border-black" />
              <div>
                <h3 className="text-white text-lg font-bold">{edu.degree}</h3>
                <p className="text-secondary text-[16px]">{edu.institution}</p>
                <p className="text-secondary text-[14px] mt-1">{edu.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
