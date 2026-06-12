import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import HeroSection from "../components/HeroSection";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import TestimonialSection from "../components/TestimonialSection";
import ExperienceTimeline from "./Experience";
import wrok_space_video from "../assets/videos/work-space.mp4";
import profile from "../assets/images/profile/my-profile-defringe-legs.png";
import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

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
    <div className="home-shell flex flex-col overflow-x-clip overflow-y-visible bg-custom-gradient">
      <div className="home-mobile-profile-layer pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden lg:hidden">
        <img
          src={profile}
          alt="Ghulam Ali"
          className="relative translate-y-[320px] sm:translate-y-[390px] lg:translate-y-[540px] w-[1500px] sm:w-[1850px] lg:w-[2700px] xl:w-[3050px] 2xl:w-[3400px] max-h-[185vh] object-contain"
        />
      </div>

      <div className="home-profile-layer" aria-hidden="true">
        <img
          src={profile}
          alt=""
          className="home-profile-image"
        />
      </div>

      <div className="home-lighting-layer" aria-hidden="true" />
      <div className="home-lighting-accent" aria-hidden="true" />
      <div className="home-bottom-ink" aria-hidden="true" />
      <div className="home-bottom-ink-glow" aria-hidden="true" />

      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(16,36,51,0.08)_0%,rgba(9,15,24,0.18)_45%,rgba(7,12,20,0.45)_100%)]"></div>

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

      <div className="home-content-column">
        <HeroSection HandleViewWorkSpace={HandleViewWorkSpace} />
        <Services />
        <About />
        <Portfolio />
        <ExperienceTimeline />
        <TestimonialSection />
      </div>

      <a
        href="https://wa.me/9231113897856?text=Hi%20Ghulam%20Ali%2C%20I%20want%20to%20quickly%20connect%20with%20you%20about%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Quickly contact on WhatsApp"
        className="whatsapp-float-button"
      >
        <span className="whatsapp-float-icon">
          <FaWhatsapp />
        </span>
        <span className="whatsapp-float-copy">
          Chat on WhatsApp
          <small>03113897856</small>
        </span>
      </a>
    </div>
  );
};

export default Home;
