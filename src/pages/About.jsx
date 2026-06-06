import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Eduction from "../utils/Eduction.json";
import { useLocation } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const About = () => {
  useEffect(() => {
    document.title = "Ghulam Ali | About Me";
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className="w-full bg-[#0f1116] text-white py-16 px-6 md:px-20 ">
      <div className="w-[95%] lg:w-[1600px] m-auto">
        <motion.h2
          className="h3 text-[40px] lg:h3 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          More <span className="text-[#1ea6c8]">About</span> Me
        </motion.h2>

        <motion.p
          className="text-md text-center w-full lg:w-[40%] m-auto text-[#B0B7C5]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          I’m Ghulam Ali — a passionate full-stack developer who turns ideas
          into clean, fast, and scalable digital solutions. I blend creativity
          with code to build web experiences that truly connect.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Education */}
          <motion.div
            className="flex flex-col gap-[20px]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="h5">My Education</h3>

            {Eduction.map((data, index) => (
              <motion.div key={index} className="flex flex-col gap-[15px]">
                <div>
                  <p className="h6 text-[26px]">{data.year}</p>
                  <h4 className="h6 text-[26px] text-[#1ea6c8] font-bold">
                    {data.course}
                  </h4>
                </div>
                <p className="text-md text-[#B0B7C5] text-[18px]">{data.dec}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div
            className="flex flex-col gap-[20px]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="h5">My Skills</h3>
            {[
              { skill: "HTML CSS & Css Frameworks", level: 80 },
              { skill: "JavaScript", level: 80 },
              { skill: "React js", level: 70 },
              { skill: "Node js &  Server Deplayment", level: 40 },
              { skill: "Database", level: 65 },
              { skill: "Git & Githab", level: 60 },
              { skill: "WordPress", level: 60 },
            ].map(({ skill, level }) => (
              <div key={skill} className="flex flex-col gap-[20px]">
                <div className="flex justify-between text-sm mt-[10px]">
                  <span className="text-md">{skill}</span>
                  <span className="text-md">{level}%</span>
                </div>
                <div className="w-full h-[20px] bg-gray-700 rounded-[20px] ">
                  <div
                    className="h-[20px] bg-[#1ea6c8] rounded-[20px] text-md"
                    style={{ width: `${level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
