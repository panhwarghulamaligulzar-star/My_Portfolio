import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import HeroSection from "../components/HeroSection";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import TestimonialSection from "../components/TestimonialSection";
import ExperienceTimeline from "./Experience";
import wrok_space_video from "../assets/videos/work-space.mp4";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    document.title = "Ghulam Ali | Home";
  }, []);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const HandleViewWorkSpace = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="relative flex flex-col w-full h-full ">
      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        width={1000}
        destroyOnClose
        bodyStyle={{ padding: 0, overflow: "hidden" }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <video
            src={wrok_space_video}
            autoPlay
            controls
            muted
            style={{ width: "100%", display: "block" }}
          />

          {/* Green Transparent Overlay at Bottom */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "700px",
              background:
                "linear-gradient(to top, rgba(0, 166, 200, 0.4), transparent)",
              pointerEvents: "none",
            }}
          />
        </div>
      </Modal>

      <HeroSection HandleViewWorkSpace={HandleViewWorkSpace} />
      <Services />
      <About />
      <Portfolio />
      <ExperienceTimeline />
      <TestimonialSection />
    </div>
  );
};

export default Home;
