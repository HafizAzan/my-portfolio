"use client";
import CustomDrawer from "components/CustomDrawer/CustomDrawer";
import { imageUrl } from "imageConstant/ImagesUrl";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navItems } from "utils/helper.function";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const ScrollHandler = () => {
      const scrollY = window.scrollY;
      if (scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", ScrollHandler);
    return () => {
      window.removeEventListener("scroll", ScrollHandler);
    };
  }, []);

  return (
    <>
      <nav
        id="nav"
        className={` fixed top-0 flex justify-between w-full h-[5rem] transition-all duration-200 ease-in-out items-center pl-5 z-10 ${
          scrolled
            ? " scroll-header"
            : "bg-transparent transition-all duration-200 ease-in-out"
        } `}
      >
        <Link href="/">
          <Image
            src={imageUrl.logo}
            alt="Logo"
            className="scale-[1] transition-all duration-200 ease-in-out hover:scale-[1.1] hover:transition-all hover:duration-200 hover:ease-in-out"
          />
        </Link>
        <ul className="flex gap-10 text-[17px] pr-12">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                {...(item.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                onClick={() => setActiveLink(item.label)}
                className={`relative text-white text-[1em] pb-2 ${
                  activeLink === item.label ? "border-b-2 border-white" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <i
          className="fa-solid fa-bars menu-icon text-[22px] rounded-[5px] text-white px-3 py-2 mr-6 border-[2px] border-white text-center"
          onClick={() => setOpen(true)}
        ></i>
        {/* <CustomDrawer open={open} setOpen={setOpen} /> */}
      </nav>
    </>
  );
};

export default NavBar;
