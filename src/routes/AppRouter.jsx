// src/router/AppRouter.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Experience from "../pages/Experience";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Blog" element={<Blogs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
