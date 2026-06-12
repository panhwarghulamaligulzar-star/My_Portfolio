import React, { useMemo, useState } from "react";
import navData from "../utils/navData.json";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo_png.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai"; // For close icon
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineCollection,
  HiOutlineMail,
  HiOutlineDownload,
} from "react-icons/hi";
import { Drawer } from "antd";

const Header = () => {
  const [open, setOpen] = useState(false);
  const iconMap = useMemo(
    () => ({
      Home: HiOutlineHome,
      "About me": HiOutlineUser,
      Portfolio: HiOutlineCollection,
      Experience: HiOutlineBriefcase,
      "Contact me": HiOutlineMail,
    }),
    []
  );

  const desktopNavItems = navData.map((item, index) => {
    const Icon = iconMap[item.label] || HiOutlineHome;

    return (
      <NavLink
        key={index}
        to={item.url}
        className={({ isActive }) =>
          `group flex h-[52px] w-[52px] items-center justify-center rounded-full border transition-all duration-300 ${
            isActive
              ? "border-[#2FB7D966] bg-[#2FB7D926] text-[#2FB7D9] shadow-[0_12px_30px_rgba(47,183,217,0.2)]"
              : "border-transparent bg-transparent text-white/80 hover:border-[#2FB7D944] hover:bg-[#ffffff10] hover:text-[#2FB7D9]"
          }`
        }
        onClick={() => setOpen(false)}
        title={item.label}
        aria-label={item.label}
      >
        <Icon className="text-[22px]" />
      </NavLink>
    );
  });

  const mobileNavItems = navData.map((item, index) => {
    const Icon = iconMap[item.label] || HiOutlineHome;

    return (
      <NavLink
        key={index}
        to={item.url}
        className={({ isActive }) =>
          `flex items-center gap-3 rounded-[18px] border px-4 py-3 text-md transition-all duration-300 ${
            isActive
              ? "border-[#2FB7D955] bg-[#2FB7D91a] text-[#2FB7D9]"
              : "border-[#ffffff14] text-white/85 hover:border-[#2FB7D944] hover:bg-[#ffffff08] hover:text-[#2FB7D9]"
          }`
        }
        onClick={() => setOpen(false)}
      >
        <Icon className="text-[20px]" />
        <span>{item.label}</span>
      </NavLink>
    );
  });
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <section className="sticky top-0 z-[999] w-full bg-transparent py-5">
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
            {mobileNavItems}
          </div>

          <a href="/cv/Ghulam-ali.pdf" download="Ghulam-Ali-CV.pdf">
            <button className="!h-[54px] !w-full my-[12px] btn-xl">
              <span className="flex items-center justify-center gap-2 font-sans text-md">
                <HiOutlineDownload className="text-[18px]" />
                Download CV
              </span>
            </button>
          </a>
        </nav>
      </Drawer>

      {/* Main header content */}
      <div className="mx-auto flex h-[92px] w-[95%] max-w-[1580px] items-center justify-between rounded-full px-5 lg:px-7">
        {/* Logo */}
        <div className="shrink-0">
          <NavLink to="/">
            <img src={logo} alt="logo" className="h-auto w-[180px] lg:w-[210px]" />
          </NavLink>
        </div>

        {/* Navbar links for desktop */}
        <div className="hidden lg:block">
          <nav>
            <ul className="flex items-center justify-center gap-3 rounded-full border border-[#2FB7D933] bg-[#0d182766] px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-[20px]">
              {desktopNavItems}
            </ul>
          </nav>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* Desktop CV button */}
          <a href="/cv/Ghulam-ali.pdf" download="Ghulam-Ali-CV.pdf">
            <button className="hidden lg:flex !h-[58px] !w-[210px] items-center justify-center rounded-full border border-[#2FB7D955] bg-[#2FB7D9] px-6 shadow-[0_16px_35px_rgba(47,183,217,0.28)] transition-all duration-300 hover:scale-[1.02]">
              <span className="flex items-center gap-2 font-sans text-[18px] font-[600] text-white">
                <HiOutlineDownload className="text-[20px]" />
                Download CV
              </span>
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
