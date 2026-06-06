import { Tag } from "antd";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const techStack = ["React", "Tailwind CSS", "Ant Design", "Redux"];
const ExpreinceCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card flex justify-center items-start !w-full lg:!w-[49%] p-6 rounded-xl shadow-md">
      <h3 className="h6">Frontend Developer</h3>
      <div className="w-full flex justify-between items-center">
        <span className="text-md text-[#1ea6c8]">DesignaTech Pvt. Ltd.</span>
        <span className="text-md text-[#1ea6c8]">2023 TO 2024</span>
      </div>
      <div className="flex justify-between items-center gap-[30px] w-full">
        <p className="text-md text-[#B0B7C5] text-[18px] text-start">
          Developed a modern, responsive dashboard for managing product
          analytics, user engagement, and sales reports.
        </p>
        <button
          onClick={toggleDetails}
          className="btn-xl-transparint w-[40px] h-[40px] flex justify-center items-center"
        >
          {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </div>

      {/* Additional Hidden Content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-md text-[#B0B7C5] text-[16px] mt-2  text-start">
          Collaborated with designers and backend developers to build a seamless
          UX. Implemented reusable components with Ant Design and maintained
          global state using Redux Toolkit. Also optimized performance using
          code-splitting and lazy loading techniques.
        </p>
      </div>

      <div className="flex flex-col gap-[10px] mt-4">
        <p className="text-md text-[20px] text-start">Tech Stack</p>
        <div className="flex gap-[5px] flex-wrap">
          {techStack.map((tech, index) => (
            <Tag
              className="bg-[#1ea6c867] border border-[#277eb1] p-[5px]"
              key={index}
            >
              <span className="text-md text-[15px]">{tech}</span>
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpreinceCard;
