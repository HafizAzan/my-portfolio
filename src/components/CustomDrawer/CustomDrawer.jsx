"use client";
import { Drawer } from "antd";
import { imageUrl } from "imageConstant/ImagesUrl";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CustomDrawer = ({ open, setOpen }) => {
  const [activeLink, setActiveLink] = useState("Home");
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/" },
    {
      label: "Demo Classes",
      href: "https://www.youtube.com/watch?v=JNixBunE76U&list=PLhruWMYekkKoKL3BA-_RJRUNz4RTNsAac&ab_channel=MuzammilRafay",
      external: true,
    },
  ];
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer
        title={null}
        closable={false}
        headerStyle={{
          backgroundColor: "transparent",
          borderBottom: "none",
        }}
        placement={"top"}
        width={500}
        onClose={onClose}
        open={open}
      >
        <nav className={`flex justify-between w-full pr-4`}>
          <Link href="/">
            <Image
              src={imageUrl.logo}
              alt="Logo"
              className="scale-[1] transition-all duration-600 ease-in-out hover:scale-[1.1] hover:transition-all hover:duration-600 hover:ease-in-out"
            />
          </Link>
          <i
            className="fa-solid fa-x menu-icon text-[40px] text-white cursor-pointer"
            onClick={onClose}
          ></i>
        </nav>
        <div>
          <ul className="flex flex-col gap-8 pt-6 pl-2 text-[20px]">
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
        </div>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
