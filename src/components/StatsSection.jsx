import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import stats from "../utils/status";
import ScrollRevealSection from "./ScrollRevealSection";

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.3, // adjust as needed
  });

  return (
    <ScrollRevealSection
      as="section"
      className="relative z-10 mt-[50px] flex h-[350px] w-full items-center justify-center bg-transparent lg:h-[230px]"
      panelClassName="glass-panel w-[95%] lg:w-[1600px] justify-center items-center m-auto px-6 py-8"
      contentClassName="grid grid-cols-2 gap-10 text-center md:grid-cols-4 will-change-transform"
    >
      <div ref={ref} className="contents">
        {stats.map((stat, index) => (
          <div key={index} className="w-[100%]">
            <h2 className="h3 text-white">
              {inView ? (
                <CountUp end={stat.number} duration={2} suffix={stat.suffix} />
              ) : (
                `0${stat.suffix}`
              )}
            </h2>
            <p className="heading-md !text-[#ffff]">{stat.label}</p>
          </div>
        ))}
      </div>
    </ScrollRevealSection>
  );
};

export default StatsSection;
