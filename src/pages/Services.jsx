import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import services from "../utils/services";
import ServicesCrad from "../components/ServicesCrad";
import ScrollRevealSection from "../components/ScrollRevealSection";
import ScrollRevealItem from "../components/ScrollRevealItem";
import { useLocation } from "react-router-dom";
const Services = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <ScrollRevealSection
      className="relative z-10 w-full h-[100%] py-[100px] bg-transparent"
      panelClassName="glass-panel mx-auto h-full w-full max-w-[1180px] px-5 py-10 lg:px-8"
      contentClassName="will-change-transform"
    >
        <div className="flex flex-col gap-10">
          <ScrollRevealItem>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center justify-center gap-6 text-center"
            >
              <span className="inline-flex w-fit rounded-full border border-[#2FB7D955] bg-[#102131b3] px-4 py-2 font-mono text-[12px] uppercase tracking-[3px] text-[#2FB7D9]">
                Skills and Technologies
              </span>

              <h2 className="h2 !text-[38px] lg:!text-[58px] !leading-[1.05] uppercase">
                Modern <span className="text-cyan-400">MERN Stack</span>
                <br />
                Toolset
              </h2>

              <p className="heading-md max-w-[760px] text-[16px] lg:text-[18px]">
                A focused development stack built for fast interfaces, scalable
                APIs, clean architecture, real-time features, modern deployment,
                and AI-ready product experiences.
              </p>
            </motion.div>
          </ScrollRevealItem>

          <ScrollRevealItem delay={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="grid grid-cols-4 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
            >
              {services.map((service, idx) => {
                return <ServicesCrad key={idx} service={service} idx={idx} />;
              })}
            </motion.div>
          </ScrollRevealItem>
        </div>
    </ScrollRevealSection>
  );
};

export default Services;
