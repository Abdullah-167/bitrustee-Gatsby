import React from "react";
import Logo from "../../images/footerlogo.svg";
import { Link } from "gatsby";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";

const Footer = () => {
  return (
    <div className="bg-[#263640]">
      <div className="max-w-[900px] mx-auto py-20 px-4">
        <div className="flex md:flex-row flex-col gap-10 justify-between items-center">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div className="">
            <div className="flex justify-center gap-2 items-center mb-4 text-white bg-primary border border-white px-6 py-2 rounded-md cursor-pointer hover:bg-[#FA992D] transition-all duration-200">
              <span className="text-base font-normal">Github</span>
              <span>
                <AiFillGithub />
              </span>
            </div>
            <div className="flex justify-center gap-2 items-center text-primary bg-white border border-primary px-6 py-2 rounded-md cursor-pointer transition-all duration-200">
              <span className="text-base font-normal">LinkedIn</span>
              <span>
                <FaLinkedinIn />
              </span>
            </div>
          </div>
          <div className="pt-6">
            {pages.map((item, index) => {
              return (
                <div className=" text-white text-lg my-4" key={index}>
                  <Link to={item.path}>
                    <span className="py-2 hover:border-b border-b-white">
                      {item.link}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const pages = [
  {
    link: "Services",
    path: "/services",
  },
  {
    link: "Blog",
    path: "/blog",
  },
  {
    link: "Produits",
    path: "/produits",
  },
];
