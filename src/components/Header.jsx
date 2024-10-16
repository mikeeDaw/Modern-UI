import React, { useState } from "react";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HambugerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  // Returns the current URL
  const pathName = useLocation();

  const [openNav, setOpenNav] = useState(false);

  // toggle when the Hamburger Icon is clicked and enable/disable scrolling.
  const toggleNav = () => {
    // setOpenNav((prev) => !prev);
    if (openNav) {
      setOpenNav(false);
      enablePageScroll();
    } else {
      setOpenNav(true);
      disablePageScroll();
    }
  };
  // So when you click on any elem on the nav, it will self close.
  const handleClick = () => {
    if (!openNav) return;

    setOpenNav(false);
    enablePageScroll();
  };

  return (
    <div
      className={`fixed w-full left-0 top-0 z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNav ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      } `}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} alt="brainwave" width={190} height={40} />
        </a>
        {
          // The routing links
        }
        <nav
          className={`${
            openNav ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-color hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } p-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  // Gray out the not selected route.
                  item.url === pathName.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          {
            // Put the Hamburger Menu Here
          }
          <HambugerMenu />
        </nav>

        {
          // The 'New Account' and 'Sign In' Buttons
        }
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button className={`hidden lg:flex`} href={"#login"}>
          Sign In
        </Button>

        {
          // The Icon for Hamburger Menu
        }
        <Button className={"ml-auto lg:hidden"} px={"px-4"} onClick={toggleNav}>
          <MenuSvg openNav={openNav} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
