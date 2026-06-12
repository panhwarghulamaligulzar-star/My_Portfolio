import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiGlobe, FiMonitor, FiTrendingUp } from "react-icons/fi";
import Eduction from "../utils/Eduction.json";
import ScrollRevealSection from "../components/ScrollRevealSection";
import ScrollRevealItem from "../components/ScrollRevealItem";
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

const circleSkills = [
  {
    title: "SEO & Ranking",
    value: 90,
    icon: FiTrendingUp,
  },
  {
    title: "Responsive",
    value: 100,
    icon: FiMonitor,
  },
  {
    title: "Live Hosting",
    value: 85,
    icon: FiGlobe,
  },
];

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
    <ScrollRevealSection
      as="div"
      className="relative z-10 w-full bg-transparent px-6 py-16 text-white md:px-20"
      panelClassName="glass-panel mx-auto w-full max-w-[1180px] px-5 py-10 lg:px-8"
      contentClassName="will-change-transform"
    >
      <ScrollRevealItem>
        <motion.h2
          className="h3 text-center text-[40px] lg:h3"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          More <span className="text-[#1ea6c8]">About</span> Me
        </motion.h2>
      </ScrollRevealItem>

      <ScrollRevealItem delay={0.08}>
        <motion.p
          className="mx-auto w-full text-center font-sans text-[17px] leading-8 text-[#B0B7C5] lg:w-[68%] lg:text-[20px]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          I&apos;m Ghulam Ali, a passionate full-stack developer who turns ideas
          into clean, fast, and scalable digital solutions. I blend creativity
          with code to build web experiences that truly connect.
        </motion.p>
      </ScrollRevealItem>

      <ScrollRevealItem delay={0.14}>
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <motion.div
            className="flex flex-col gap-[20px]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-sans text-[30px] font-[700] text-white lg:text-[38px]">
              My Education
            </h3>

            {Eduction.map((data, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-4 rounded-[22px] border border-[#2FB7D922] bg-[#0f1825a6] p-5 backdrop-blur-[16px]"
              >
                <div>
                  <p className="font-sans text-[30px] font-[700] text-white lg:text-[34px]">
                    {data.year}
                  </p>
                  <h4 className="mt-1 font-sans text-[26px] font-[700] leading-snug text-[#1ea6c8] lg:text-[30px]">
                    {data.course}
                  </h4>
                </div>
                <p className="font-sans text-[17px] leading-8 text-[#B0B7C5] lg:text-[20px]">
                  {data.dec}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col gap-[20px]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-sans text-[30px] font-[700] text-white lg:text-[38px]">
              My Skills
            </h3>
            {[
              { skill: "HTML CSS & Css Frameworks", level: 80 },
              { skill: "JavaScript", level: 80 },
              { skill: "React js", level: 70 },
              { skill: "Node js &  Server Deplayment", level: 40 },
              { skill: "Database", level: 65 },
              { skill: "Git & Githab", level: 60 },
              { skill: "WordPress", level: 60 },
              { skill: "Domain & Website Hosted", level: 80 },
            ].map(({ skill, level }) => (
              <div key={skill} className="flex flex-col gap-[14px]">
                <div className="mt-[10px] flex justify-between gap-4">
                  <span className="font-sans text-[19px] font-[600] text-white lg:text-[21px]">
                    {skill}
                  </span>
                  <span className="font-sans text-[19px] font-[600] text-white lg:text-[21px]">
                    {level}%
                  </span>
                </div>
                <div className="h-[20px] w-full rounded-[20px] bg-gray-700/90">
                  <div
                    className="h-[20px] rounded-[20px] bg-[#1ea6c8]"
                    style={{ width: `${level}%` }}
                  ></div>
                </div>
              </div>
            ))}

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {circleSkills.map(({ title, value, icon: Icon }) => (
                <div
                  key={title}
                  className="flex flex-col items-center rounded-[22px] bg-transparent px-4 py-5 text-center"
                >
                  <div className="relative flex h-[124px] w-[124px] items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(#1ea6c8 ${value * 3.6}deg, rgba(85, 98, 124, 0.5) 0deg)`,
                        WebkitMask:
                          "radial-gradient(farthest-side, transparent calc(100% - 14px), #000 calc(100% - 13px))",
                        mask:
                          "radial-gradient(farthest-side, transparent calc(100% - 14px), #000 calc(100% - 13px))",
                      }}
                    />

                    <div className="relative z-10 flex flex-col items-center justify-center rounded-full bg-transparent">
                      <Icon className="text-[24px] text-[#2FB7D9]" />
                      <span className="mt-1 font-sans text-[18px] font-[700] text-white">
                        {value}%
                      </span>
                    </div>
                  </div>

                  <h4 className="mt-4 font-sans text-[16px] font-[600] text-[#d7e4f2]">
                    {title}
                  </h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </ScrollRevealItem>
    </ScrollRevealSection>
  );
};

export default About;
