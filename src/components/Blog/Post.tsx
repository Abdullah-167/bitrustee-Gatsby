import React from "react";
import Layout from "../Layout";

const Post = () => {
  return (
    <Layout>
      <div>
        <div className="post-bg py-40">
          <div className="container">
            <h1 className="text-2xl md:text-4xl font-black text-main max-w-[700px]">
              Title Here: Here will be the H1 Title Here will be the H1 Title
            </h1>
            <div className="flex items-center gap-3 text-sm mt-4">
              <p className="text-[#646363] cursor-pointer">John Wick</p>
              <p className="text-[#646363]">-</p>
              <p className="text-[#646363]">5 Min Read</p>
            </div>
          </div>
        </div>
        <div className="container py-20 text-main">
          <h2 className="text-xl md:text-2xl font-bold  mb-10">
            {" "}
            Outline Here: Here will be the Outline Here will be the Outline
          </h2>
          <p>
            Para Here: Here will be the Outline Here will be the OutlineHere
            will be the Outline Here will be the OutlineHere will be the Outline
            Here will be the OutlineHere will be the Outline Here will be the
            OutlineHere will be the Outline Here will be the OutlineHere will be
            the Outline Here will be the OutlineHere will be the Outline Here
            will be the OutlineHere will be the Outline Here will be the
            OutlineHere will be the Outline Here will be the Outline Para Here:
            Here will be the Outline Here will be the OutlineHere will be the
            Outline Here will be the OutlineHere will be the Outline Here will
            be the OutlineHere will be the Outline Here will be the OutlineHere
            will be the Outline Here will be the OutlineHere will be the Outline
            Here will be the OutlineHere will be the Outline Here will be the
            OutlineHere will be the Outline Here will be the OutlineHere will be
            the Outline Here will be the Outline Para Here: Here will be the
            Outline Here will be the OutlineHere will be the Outline Here will
            be the OutlineHere will be the Outline Here will be the OutlineHere
            will be the Outline Here will be the OutlineHere will be the Outline
            Here will be the OutlineHere will be the Outline Here will be the
            OutlineHere will be the Outline Here will be the OutlineHere will be
            the Outline Here will be the OutlineHere will be the Outline Here
            will be the Outline Para Here: Here will be the Outline Here will be
            the OutlineHere will be the Outline Here will be the OutlineHere
            will be the Outline Here will be the OutlineHere will be the Outline
            Here will be the OutlineHere will be the Outline Here will be the
            OutlineHere will be the Outline Here will be the OutlineHere will be
            the Outline Here will be the OutlineHere will be the Outline Here
            will be the OutlineHere will be the Outline Here will be the Outline
            Para Here: Here will be the Outline Here will be the OutlineHere
            will be the Outline Here will be the OutlineHere will be the Outline
            Here will be the OutlineHere will be the Outline Here will be the
            OutlineHere will be the Outline Here will be the OutlineHere will be
            the Outline Here will be the OutlineHere will be the Outline Here
            will be the OutlineHere will be the Outline Here will be the
            OutlineHere will be the Outline Here will be the Outline
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Post;
