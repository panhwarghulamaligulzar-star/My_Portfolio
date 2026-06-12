import React from "react";
import { IoPlaySharp } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";

const HeroSection = ({ HandleViewWorkSpace }) => {
  return (
    <section className="w-full min-h-screen overflow-hidden">
      <div className="relative mx-auto flex min-h-screen w-full items-center justify-center px-4 py-8 lg:justify-start lg:px-0 lg:py-12">
        <div className="relative z-20 w-full max-w-[730px] px-0 lg:pt-0 lg:-translate-y-40 lg:translate-x-[1.25rem]">
          <div className="flex flex-col items-center gap-3 rounded-[34px] border border-[#2FB7D966] bg-[#0b172433] px-5 py-7 text-center shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-[24px] sm:px-8 lg:items-start lg:px-8 lg:py-9 lg:text-left">
            <h1 className="h1 !text-[30px] sm:!text-[44px] lg:!text-[76px] tracking-[4px]">
              Ghulam ali
            </h1>

            <h2 className="h1 !text-[16px] sm:!text-[22px] lg:!text-[24px] !text-[#2FB7D9] leading-tight lg:max-w-[560px]">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  1000,
                  "Full Stack JavaScript Engineer",
                  1000,
                  "React, Next.js & Node.js Developer",
                  1000,
                  "AI-Integrated Web Developer",
                  1000,
                  "TypeScript, Express & MongoDB Expert",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>

            <p className="heading-md max-w-[620px] py-2 text-[15px] sm:text-[18px] lg:max-w-[560px]">
              I craft modern full-stack web applications with React, Next.js,
              Node.js, Express, MongoDB, TypeScript, and AI-powered workflows
              focused on performance, scalability, and clean user experience.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-4 lg:justify-start">
              <NavLink to="/Contact">
                <button className="btn-xl !w-[130px] !h-[44px] lg:!w-[200px] lg:!h-[70px] !font-montserrat !text-[#fff]">
                  Hire Me
                </button>
              </NavLink>

              <button
                onClick={() => HandleViewWorkSpace(true)}
                className="btn-xl-transparint flex items-center justify-center gap-3 pl-2 pr-5 !w-[190px] !h-[44px] lg:!w-[240px] lg:!h-[70px] lg:pr-[10px]"
              >
                <span className="w-[34px] h-[34px] lg:w-[52px] lg:h-[52px] bg-white rounded-full flex items-center justify-center ml-[-56px]">
                  <IoPlaySharp className="text-[18px] lg:text-[22px] text-[#2FB7D9]" />
                </span>
                <span className="font-montserrat text-[#fff]">Work Space</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
