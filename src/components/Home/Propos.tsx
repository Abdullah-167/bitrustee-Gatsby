import React from "react";
import Jean from "../../images/jean.svg";
import { Link } from "gatsby";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";


const Propos = () => {
  return (
    <div className="bg-[#F5F8FA] w-full py-12 md:py-28 relative px-4 md:px-0">
      <marquee
        className="text-[80px] absolute top-10 text-[#E2E8EB] font-black z-0"
        behavior="scrolling"
        direction="left"
        scrollamount="3"
      >
        Jean-François BETTE
      </marquee>
      <marquee
        className="text-[80px] absolute bottom-10 text-[#E2E8EB] font-black z-0"
        behavior="scrolling"
        direction="right"
        scrollamount="3"
      >
        Jean-François BETTE
      </marquee>
      <div className="flex md:flex-row flex-col justify-center items-center gap-14 md:gap-20">
        <div className="z-20">
          <img src={Jean} alt="jean" className="w-full md:max-w-[300px] md:rounded-none rounded-xl" />
          <div className="flex justify-center gap-3 mt-4">
            <div className="flex justify-center gap-2 items-center text-white bg-primary border border-primary px-6 py-2 rounded-md cursor-pointer hover:bg-[#FA992D] transition-all duration-200">
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
        </div>
        <div className="z-20">
          <h2 className=" text-xl text-primary">A propos</h2>
          <h3 className="text-2xl md:text-3xl text-main font-black max-w-[700px]">
            Architecte Solution / Expert Cybersecurité Cloud
          </h3>
          <div className=" pt-6">
            <h3 className="text-base md:text-lg text-main font-bold">
              13 ans d’experience dont 7 ANS dans le CLOUD
            </h3>
            <ul className="text-sm text-secondary font-semibold py-1 list-disc pl-3">
              <li>Expert cybersécurité sécurité AWS </li>
              <li>Expert système Linux</li>
              <li>Architecte technique </li>
            </ul>
          </div>

          <div className="pt-4">
            <h3 className="text-base md:text-lg text-main font-bold">
              Sujets de PREDILECTION
            </h3>
            <ul className="text-sm text-secondary font-semibold py-1 list-disc pl-3">
              <li>AWS </li>
              <li>Kubernetes</li>
              <li>Confidential Computing </li>
              <li>Threat modeling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propos;

