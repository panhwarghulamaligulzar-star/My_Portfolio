import React, { useEffect, useState } from "react";
import projects from "../utils/projects";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

const Portfolio = () => {
  const [ActiveProject, setActiveProject] = useState("All");
  const [selectedProject, setSelectedProject] = useState([]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.1, // staggered delay
      },
    }),
  };

  useEffect(() => {
    setSelectedProject(projects);
  }, []);

  const categories = ["All", "Web Desining", "Web Development", "Web App"];

  const handleProjectFilter = (proName) => {
    setActiveProject(proName);
    const filtered = projects.filter((pro) => pro.title === proName);
    if (proName === "All") {
      setSelectedProject(projects);
    } else {
      setSelectedProject(filtered);
    }
  };

  useEffect(() => {
    document.title = "Ghulam Ali | Portfolio";
  }, []);

  return (
    <div className="bg-custom-gradient w-full h-full py-[70px]">
      <div className="w-[98%] m-auto flex flex-col gap-[50px]">
        {/* Title + Subtitle */}
        <div className="text-center flex flex-col gap-[25px]">
          <motion.h2
            className="h3 text-[40px] lg:h3 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Discover <span className="text-[#1ea6c8]">My Recent</span> Work
          </motion.h2>

          <motion.p
            className="text-md text-center w-full lg:w-[40%] m-auto text-[#B0B7C5]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={1}
          >
            Welcome to my world of digital craftsmanship! Here, I showcase my
            recent projects where creativity, innovation, and technical
            expertise come together to build seamless, user-centric web
            applications. Discover how I tackle challenges and deliver
            cutting-edge solutions through full-stack development and design."
          </motion.p>
        </div>

        {/* Categories */}
        <div className="w-full mb-12">
          <div className="w-[90%] mx-auto overflow-x-auto whitespace-nowrap custom-scrollbar px-2 pb-4">
            <div className="flex gap-6 lg:justify-center lg:items-center">
              {categories.map((cat, idx) => (
                <motion.button
                  onClick={() => handleProjectFilter(cat)}
                  key={idx}
                  className={`text-md px-6 py-2 rounded-full border border-[#1ea6c8] text-white hover:bg-[#1ea6c8] transition-all duration-300 ${
                    cat === ActiveProject ? "bg-[#1ea6c8]" : ""
                  }`}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={idx}
                >
                  <span className="text-nowrap">{cat}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Cards */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-6 overflow-hidden">
          {selectedProject.map((project, index) => (
            <motion.div
              key={index}
              className="w-full h-full text-md relative overflow-hidden group  flex"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <img
                src={project.img}
                alt={project.title}
                className=" object-contain rounded-[8px]  group-hover:scale-105 transition-transform duration-300 border-2 border-[#0E5167]"
              />

              <div
                className="absolute top-[100%] group-hover:top-[23%] group-hover:lg:top-[29%] left-0 w-full h-[170px] p-[20px] 
                bg-[rgba(6,125,160,0.3)] backdrop-blur-md rounded-b-[8px] 
                transition-all duration-500 ease-in-out group-hover:shadow-xl"
              >
                <motion.h3
                  className="h6 text-[26px]"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index + 1}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="heading-md !text-[#ffff] text-[18px]"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index + 1.2}
                >
                  {project.subtitle}
                </motion.p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="btn-sm mt-[10px]"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index + 1.4}
                  >
                    View Live
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Button */}
        {/* <motion.div
          className="w-full flex justify-center items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <button className="btn-xl">
            <span className="text-md">More Projects</span>
          </button>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Portfolio;
