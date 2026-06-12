import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const ScrollRevealItem = ({
  children,
  className = "",
  delay = 0,
  amount = 0.2,
  y = 48,
  duration = 0.8,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealItem;
