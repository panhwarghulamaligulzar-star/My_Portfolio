import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import services from "../utils/services";
import ServicesCrad from "../components/ServicesCrad";
import StatsSection from "../components/StatsSection";
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
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="w-full h-[100%]  py-[100px] bg-[#0f1116]">
      <div className="w-[95%] h-full lg:w-[1600px]  m-auto flex justify-between flex-wrap items-center">
        {/* Left Section */}

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:w-1/3 flex flex-col justify-center gap-[30px]"
        >
          <h2 className="h2 !text-[50px] lg:h2">
            My <span className="text-cyan-400">Services</span>
          </h2>

          <p className="heading-md text-[16px] lg:heading-md">
            <strong>
              Crafting Modern, Scalable & User-Centric Web Solutions That Drive
            </strong>{" "}
            Results As a passionate web developer, I specialize in building
            responsive, high-performance websites and web applications using the
            latest technologies like React JS, JavaScript, and modern UI
            frameworks. Whether you're a startup needing an MVP or a business
            looking to upgrade your online presence.
          </p>

          {/* Hidden Paragraph */}
          <motion.div
            initial={false}
            animate={{
              height: showMore ? "auto" : 0,
              opacity: showMore ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="heading-md text-[16px] lg:heading-md mt-2">
              that are fast, accessible, and built to scale. My services are
              tailored to meet your goals, ensuring both visual appeal and solid
              technical performance.
            </p>
          </motion.div>

          <button
            onClick={() => setShowMore(!showMore)}
            className="w-full btn-xl lg:btn-xl transition-all duration-300"
          >
            <span className="text-md">
              {showMore ? "Read Less" : "Read More"}
            </span>
          </button>
        </motion.div>

        {/* Right Section - Services */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 mt-[30px] lg:mt-[0px]">
          {services.map((service, idx) => {
            return <ServicesCrad key={idx} service={service} idx={idx} />;
          })}
        </div>
      </div>
      <StatsSection />
    </section>
  );
};

export default Services;
