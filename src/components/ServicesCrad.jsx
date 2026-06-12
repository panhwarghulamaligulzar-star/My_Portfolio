import React from "react";
import { motion } from "framer-motion";

// Animation variant (same as used in About section)
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  },
});

const ServicesCard = ({ service, idx }) => {
  const Icon = service.icon;

  return (
    <motion.div
      className="group min-h-[110px] rounded-[18px] border border-[#2FB7D933] bg-[#121a28bf] p-3 text-center shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-[18px] transition-all duration-300 hover:-translate-y-1 hover:border-[#2FB7D988] hover:bg-[#162133e6] sm:min-h-[150px] sm:rounded-[22px] sm:p-5"
      variants={fadeInUp(idx * 0.2)} // staggered effect
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <span
        className="mx-auto mb-3 flex h-[42px] w-[42px] items-center justify-center rounded-[14px] bg-[#0f1724] text-[22px] transition-transform duration-300 group-hover:scale-110 sm:mb-4 sm:h-[54px] sm:w-[54px] sm:rounded-[16px] sm:text-[28px]"
        style={{ color: service.accent }}
      >
        <Icon />
      </span>
      <h3 className="font-sans text-[12px] font-[500] text-[#e4edf8] sm:text-[16px]">
        {service.title}
      </h3>
    </motion.div>
  );
};

export default ServicesCard;
