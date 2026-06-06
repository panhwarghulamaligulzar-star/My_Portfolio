import React from "react";
import { IoPlaySharp } from "react-icons/io5";
import profile from "../assets/images/profile/me2.png";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";

const HeroSection = ({ HandleViewWorkSpace }) => {
  return (
    <div className="w-full min-h-screen bg-custom-gradient">
      <div className="w-[95%] lg:w-[80%] mx-auto min-h-screen flex flex-col-reverse lg:flex-row justify-center items-center gap-10">
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full lg:w-1/2 z-10 flex flex-col gap-[14px] text-center lg:text-left items-center lg:items-start mt-[-80px]">
          <h1 className="h1 !text-[30px] lg:!text-[70px] tracking-[4px]">
            Ghulam ali
          </h1>

          <h2 className="h1 !text-[20px] lg:!text-[40px] !text-[#2FB7D9]">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                "React.js Developer",
                1000,
                "JavaScript Expert",
                1000,
                "Tailwind CSS Specialist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="heading-md text-[16px] max-w-[600px]">
            I have 2 years of experience in web development. I build modern,
            scalable, and pixel-perfect web applications using React.js and
            modern UI frameworks.
          </p>

          <div className="flex flex-wrap gap-5 mt-6">
            <NavLink to="/Contact">
              <button className="btn-xl  !w-[100px] !h-[40px] lg:!w-[200px] lg:!h-[70px] !font-montserrat !text-[#fff]">
                Hire Me
              </button>
            </NavLink>

            <button
              onClick={() => HandleViewWorkSpace(true)}
              className="btn-xl-transparint flex items-center gap-4 btn-xl !w-[200px] !h-[40px] lg:!w-[230px] lg:!h-[70px] "
            >
              <span className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center">
                <IoPlaySharp className="text-[24px] text-[#2FB7D9]" />
              </span>
              <span className="font-montserrat text-[#fff]">Work Space</span>
            </button>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
          {/* Glow background */}
          <div className="absolute w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] rounded-full bg-[#2FB7D9] blur-[120px] opacity-40"></div>

          {/* Profile Image */}
          <img
            src={profile}
            alt="Developer"
            className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
