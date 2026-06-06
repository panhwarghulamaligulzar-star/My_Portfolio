import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import stats from "../utils/status";

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.3, // adjust as needed
  });

  return (
    <section
      ref={ref}
      className="bg-custom-gradient w-full h-[350px] lg:h-[230px] flex justify-center items-center mt-[50px]"
    >
      <div className="w-[95%] lg:w-[1600px] justify-center items-center  m-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
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
    </section>
  );
};

export default StatsSection;
