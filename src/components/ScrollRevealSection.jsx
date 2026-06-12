import React, { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const ScrollRevealSection = ({
  as = "section",
  className = "",
  panelClassName = "",
  contentClassName = "",
  children,
}) => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, {
    once: true,
    margin: "-12% 0px -12% 0px",
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 88%", "end start"],
  });

  const panelOpacity = useTransform(scrollYProgress, [0, 0.18, 0.4], [0, 0.72, 1]);
  const panelY = useTransform(scrollYProgress, [0, 0.4, 1], [72, 0, -18]);
  const contentY = useTransform(scrollYProgress, [0, 1], [28, -22]);

  const SectionTag = motion[as];

  return (
    <SectionTag
      ref={ref}
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 48 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className={panelClassName}
        style={
          shouldReduceMotion
            ? undefined
            : {
                opacity: isInView ? panelOpacity : 0,
                y: panelY,
              }
        }
      >
        <motion.div
          className={contentClassName}
          style={shouldReduceMotion ? undefined : { y: contentY }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </motion.div>
    </SectionTag>
  );
};

export default ScrollRevealSection;
