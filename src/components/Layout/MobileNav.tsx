import React from "react";
import Drawer from "react-modern-drawer";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { Link } from "gatsby";
import "react-modern-drawer/dist/index.css";
import logo from "../../images/logo.svg";
import Mail from "../../images/mailicon.svg";
import Button from "../Button";

const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <div className="flex md:hidden justify-between px-3 py-4 ">
        <Link to="/">
          <div className="">
            <img src={logo} alt="logo" className="w-28" />
          </div>
        </Link>
        <div onClick={toggleDrawer} className="flex self-center cursor-pointer">
          <GiHamburgerMenu className="text-3xl" />
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla"
      >
        <div className="flex flex-col justify-end items-center gap-3 pt-10 px-4">
          <div className="text-secondary font-black text-4xl text-center mb-10">
          <Link to="/">
              <p className="mb-4">HOME</p>
            </Link>
            <Link to="/services">
              <p className="mb-4">SERVICES</p>
            </Link>
            <Link to="/product">
            <p className=" mb-4">PRODUITS</p>
            </Link>
            <Link to="/blog">
            <p className="mb-10">BLOGS</p>
            </Link>
            <div className=" mt-4">
              <Button text={"Contact"} img={Mail} onClick={undefined} />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileNav;
