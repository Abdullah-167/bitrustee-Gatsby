import React, { useState } from "react";

import Building from "../../images/building.webp";
import Button from "../Button";
import { AiOutlineLoading3Quarters } from "@react-icons/all-files/ai/AiOutlineLoading3Quarters";

const BlogsGrid = () => {
  const [iconRotation, setIconRotation] = useState(0);
  return (
    <div className="w-full py-10 md:py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold pb-20 pt-10">
          Featured <span className="text-primary">Blogs</span> 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-8">
          {blogsGrid.map((item, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer hover:-translate-y-3 hover:translate-x-1 transition-all duration-300"
              >
                <div>
                  <img src={Building} alt="Building" className="rounded-xl" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold mb-2 mt-5 text-main">
                    {item.title}
                  </h1>
                  <div className="flex items-center gap-3 text-sm">
                    <p className="text-[#646363] cursor-pointer">
                      {item.aurthor}
                    </p>
                    <p className="text-[#646363]">-</p>
                    <p className="text-[#646363]">5 Min Read</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          onMouseOver={() => setIconRotation(180)}
          onMouseOut={() => setIconRotation(0)}
          className="flex justify-center gap-2 items-center max-w-[200px] mx-auto mt-16 text-white bg-primary border border-primary px-6 py-2 rounded-md cursor-pointer hover:bg-[#FA992D] transition-all duration-200"
        >
          <span className="text-base font-normal">Load More</span>
          <span
            className=""
            style={{
              transform: `rotate(${iconRotation}deg)`,
              transitionDuration: '300ms'
            }}
          >
            <AiOutlineLoading3Quarters />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogsGrid;

const blogsGrid = [
  {
    img: "",
    title: "Big blog post title Big blog post title Big blog post title",
    aurthor: "John Wick",
  },
  {
    img: "",
    title: "Big blog post title Big blog post title Big blog post title",
    aurthor: "John Wick",
  },
  {
    img: "",
    title: "Big blog post title Big blog post title Big blog post title",
    aurthor: "Bashir Ahmad",
  },
  {
    img: "",
    title: "Big blog post title Big blog post title Big blog post title",
    aurthor: "John Wick",
  },
  {
    img: "",
    title: "Big blog post title Big blog post title Big blog post title",
    aurthor: "John Wick",
  },
  {
    img: "",
    title: "Big blog post title Big blog post title Big blog post title",
    aurthor: "John Wick",
  },
];
