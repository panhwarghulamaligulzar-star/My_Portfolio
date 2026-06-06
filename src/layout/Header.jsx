import React, { useState } from "react";
import navData from "../utils/navData.json";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo_png.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai"; // For close icon
import { Drawer } from "antd";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActive] = useState("Home");

  const handleActiveLink = (active) => {
    setActive(active);
  };

  const navItemsList = navData.map((item, index) => (
    <NavLink
      key={index}
      to={`${item.url}`}
      className={`relative group block text-md py-2  transition-colors duration-300 hover:text-[#2FB7D9] ${
        activeLink === item.label
          ? "text-[#2FB7D9]  border-b-[1px] border-b-[#2FB7D9]"
          : ""
      }`}
      onClick={() => {
        setOpen(false), handleActiveLink(item.label);
      }}
    >
      {item.label}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#2FB7D9] transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </NavLink>
  ));
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <section className="w-full h-[150px] bg-dark_black sticky top-0 z-[999]">
      {/* Drawer for mobile */}
      <Drawer
        title={
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Menu</span>
            <button onClick={onClose} className="text-xl">
              <AiOutlineClose />
            </button>
          </div>
        }
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        className="block lg:hidden"
        bodyStyle={{
          padding: "1rem",
          background: "black",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
          height: "100%",
        }}
      >
        <nav className="w-full h-full flex flex-col justify-between gap-2">
          <div className="w-full h-[100%] flex flex-col gap-[15px]">
            {navItemsList}
          </div>

          <a href="/cv/Ghulam-ali.pdf" download="Ghulam-Ali-CV.pdf">
            <button className="!w-full my-[12px] btn-xl">
              <span className="text-md">Download CV</span>
            </button>
          </a>
        </nav>
      </Drawer>

      {/* Main header content */}
      <div className="w-[95%] lg:w-[1600px] h-full m-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        {/* Navbar links for desktop */}
        <div className="hidden lg:block">
          <nav>
            <ul className="flex justify-center items-center gap-[50px]">
              {navItemsList}
            </ul>
          </nav>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* Desktop CV button */}
          <a href="/cv/Ghulam-ali.pdf" download="Ghulam-Ali-CV.pdf">
            <button className="hidden lg:block btn-xl">
              <span className="text-md">Download Cv</span>
            </button>
          </a>

          {/* Mobile Menu Button */}

          <button onClick={showDrawer} className="btn-cricle lg:hidden">
            <HiOutlineMenuAlt3 className="text-xl !text-[#fff]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
