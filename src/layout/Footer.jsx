import React from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/images/logo_png.png";
import { NavLink } from "react-router-dom";

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

const Footer = () => {
  return (
    <div
      className="relative z-[30] bg-[#0C0F17] text-[#c9c9c9] px-8 md:px-20 py-12 overflow-hidden"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-[95%] lg:w-[1600px] m-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {/* Logo + About */}
        <motion.div
          className="space-y-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <img src={logo} alt="logo" />
          </div>
          <p className="text-md text-[#B0B7C5] text-[18px]">
            I'm Ghulam Ali, a dedicated full-stack developer from Pakistan with
            a passion for building clean, efficient, and user-focused web
            applications.
          </p>

          <div>
            <h3 className="h6">Address</h3>
            <p className="text-md text-[#B0B7C5] text-[18px]">
              Defence View Phase 2, Karachi, Sindh, Pakistan
            </p>
          </div>

          <div className="flex space-x-4 mt-4 text-white text-lg">
            <a
              href="https://www.linkedin.com/in/ghulam-ali-35450135a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Ghulamwebdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/03113897856"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a href="panhwar.ghulamali.gulzar@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Categories */}
        {[1].map((_, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="h6">UseFull Links</h3>
            <ul className="space-y-2 relative">
              <li className="text-md text-[#B0B7C5] text-[18px] hover:text-[#ffff]">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-md text-[#B0B7C5] text-[18px] hover:text-[#ffff]">
                <NavLink to="/about">About Me</NavLink>
              </li>
              <li className="text-md text-[#B0B7C5] text-[18px] hover:text-[#ffff]">
                <NavLink to="/Portfolio">Portfolio</NavLink>
              </li>
              <li className="text-md text-[#B0B7C5] text-[18px] hover:text-[#ffff]">
                <NavLink to="/Experience"> Experience</NavLink>
              </li>
              <li className="text-md text-[#B0B7C5] text-[18px] hover:text-[#ffff]">
                <NavLink to="/Contact">Contact me</NavLink>
              </li>
            </ul>
          </motion.div>
        ))}

        {/* Newsletter */}
        <motion.div
          className="flex flex-col gap-[16px]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="h6">Newsletter</h3>
          <p className="text-md text-[#B0B7C5] text-[18px]">
            Stay in the loop with insights, tips, and updates directly from the
            world of web development. Don't miss out on what's next subscribe
            today
          </p>
          <input type="text" placeholder="Your Name:" className="input" />
          <input type="text" placeholder="Your Address:" className="input" />
          <button className="btn-xl">
            <span className=" text-md  ">Subscribe</span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <motion.div
        className="w-[95%] lg:w-[1600px] m-auto border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-md text-[#B0B7C5] text-[18px] hover:text-[#ffff]">
          Created By Ghulam Ali Gulzar
        </p>
        <p className="text-md text-[#B0B7C5] text-[18px] hover:text-[#ffff]">
          @ Copyright 2025
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
