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
      className="card"
      variants={fadeInUp(idx * 0.2)} // staggered effect
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <span className="text-[#2FB7D9] text-[30px]">
        <Icon />
      </span>
      <h3 className="h4">{service.title}</h3>
      <p className="heading-md">{service.description}</p>
    </motion.div>
  );
};

export default ServicesCard;
