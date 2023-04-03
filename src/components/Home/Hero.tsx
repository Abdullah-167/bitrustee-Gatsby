import React from "react";
import Button from "../Button";
import Mail from "../../images/mailicon.svg";
import Building from "../../images/building.png";
import Herobg from "../../images/sectionbg.png";

const Header = () => {
  return (
    <div className="w-full relative py-16 px-4">
      <div className="container">
        <div className="flex lg:flex-row flex-col items-center gap-6 lg:gap-12">
          <div className="z-20 lg:order-first order-last">
            {text.map((item, index) => {
              return (
                <div key={index}>
                  <h1 className="text-main text-xl lg:text-3xl max-w-[470px] leading-7 md:leading-9  font-bold pb-3 ">
                    {item.heading}
                  </h1>
                  <p className=" text-secondary text-base font-light pb-2 max-w-[600px]">
                    {item.para}
                  </p>
                </div>
              );
            })}
            <div className="max-w-[325px] sm:max-w-[295px] mt-8 md:mt-14">
              <Button text={"Faites vous accompagner"} img={Mail} onClick={undefined} />
            </div>
          </div>
          <div className="z-20 lg:order-last order-first">
            <img className="z-20 shadow-md rounded-md object-cover w-full" src={Building} alt="building" />
          </div>
        </div>
        <div className="lg:flex hidden">
          <img
            className="z-0 absolute inset-x-0 inset-y-56"
            src={Herobg}
            alt="bg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

const text = [
  {
    heading:
      "La sécurité de vos environement Cloud un enjeux de taille pour votre métier",
  },
  {
    para: "Que vous soyez Grand Compte, ETI ou PME, la sécurité de votre métier est primordial. Le Cloud, public/privé ou hybride, fourni un effet de levier fort pour votre métier.",
  },
  {
    para: "Cependant ladoption du Cloud peut introduire des risques majeurs sur votre métier, si mal maitrisés, mais aussi faire d offrir des opportunités certaines en termes de cybersécurité. La juste balance doit être trouvée.",
  },
  {
    para: "Des choix primordiaux doivent être fait tant dans la stratégie d adoption Cloud que dansl implémentation.        ",
  },
  {
    para: "Faisons les ensemble!",
  },
];
