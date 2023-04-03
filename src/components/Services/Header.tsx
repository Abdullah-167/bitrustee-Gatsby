import React from "react";
import Arrow from "../../images/arrow.svg";
import Building from "../../images/building.png";
import Button from "../Button";
const Header = () => {
  return (
    <div className="container py-10">
      <div className="flex lg:flex-row flex-col justify-center items-center gap-4 lg:gap-20 md:px-0 px-4">
        <div className="lg:order-first order-last w-full lg:max-w-[470px]">
          <h1 className="text-xl md:text-3xl text-main font-bold">
            Isolez vos activités critiques dans un poste de travail unique
          </h1>
          <p className=" text-secondary text-base font-light pb-2 pt-5">
            Parce que la majorité des attaques passent par les postes de
            travail, Bitrustee fournit un solution qui permet d’arrêter au plus
            l’attaque, l’isolant de vos biens les plus précieux.
          </p>
          <div className="max-w-[250px] mt-5">
            <Button
              text={"Pour en savoir plus"}
              img={Arrow}
              onClick={undefined}
            />
          </div>
        </div>
        <div className="w-full lg:max-w-[400px] lg:order-last order-first">
          <img className="rounded-md md:h-full h-64 w-full object-cover" src={Building} alt="bg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
