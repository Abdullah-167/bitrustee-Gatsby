import React from "react";
import Image1 from "../../images/img1.svg";
import Image2 from "../../images/img2.svg";
import Image3 from "../../images/img3.svg";
import Image4 from "../../images/img4.svg";
import { FaQuoteLeft } from "@react-icons/all-files/fa/FaQuoteLeft";


const References = () => {
  return (
    <div className="w-full py-20 px-4">
      <div className="container flex justify-between relative">
      <span className="text-[120px] text-[#E2E8EB] quote-icon absolute -top-5 -left-5 z-0"><FaQuoteLeft/></span>
          <div className="pb-20 z-20">
            <h1 className="text-2xl md:text-3xl text-main font-bold">
              Les mots de l’expert
            </h1>
            <p className="text-base text-secondary font-normal italic py-3 leading-7">
              La cybersécurité Cloud doit être apprhendée bien au delà des
              aspects techniquie fournie par le Cloud provider ou les outils
              utilisés. Une réevaluation des processus techniques et
              opérationnels doit être opéré afin de trouver le meilleurs modèle
              de sécurité. Les enjeux de souveraineté, sécurité des données et
              de rôle et responsabilité doivent être traités très en amont afin
              de contrôler au plus tôt les risques et réduire les impacts sur le
              design final.
            </p>
          </div>
         
      </div>
      <div className="container ">
        <div>
          <h1 className="text-[42px] text-main font-bold text-center">
            Références
          </h1>
        </div>
        <div className="flex sm:flex-row flex-col gap-10 sm:gap-20 justify-between items-center py-10">
          {images.map((item, index) => {
            return (
              <div className="" key={index}>
                <img className="max-h-[100px]" src={item.pics} alt="logo" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default References;

const images = [
  {
    pics: Image1,
  },
  {
    pics: Image2,
  },
  {
    pics: Image3,
  },
  {
    pics: Image4,
  },
];
