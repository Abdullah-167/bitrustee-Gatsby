import React from "react";
import Building from "../../images/building.webp";

const Hero = () => {
  return (
    <div className="container">
      <div className="bg-[#F5F8FA] rounded-xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 py-8 md:p-8 cursor-pointer drop-shadow-md shadow-slate-500">
        <div className="">
          <img src={Building} alt="Building" className="rounded-xl" />
        </div>
        <div className="max-w-[500px]">
          <h1 className="text-2xl lg:text-3xl font-semibold mb-5 text-main">
            Big blog post title Big blog post title Big blog post title
          </h1>
          <p className="text-[#646363] mb-5">
            Some text to introduce the article and my though on a specific
            subject Some text to introduce the article and my though on a
            specific subject
          </p>
          <div className="flex items-center gap-3 text-sm">
            <p className="text-[#646363] cursor-pointer">John Wick</p>
            <p className="text-[#646363]">-</p>
            <p className="text-[#646363]">5 Min Read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
