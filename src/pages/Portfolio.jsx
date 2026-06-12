import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FeaturedProjects from "../components/FeaturedProjects";

const Portfolio = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  useEffect(() => {
    document.title = "Ghulam Ali | Portfolio";
  }, []);

  return <FeaturedProjects />;
};

export default Portfolio;
