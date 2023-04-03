import React from "react";
import AWS1 from "../../images/certificat1.svg";
import AWS2 from "../../images/certificat2.svg";
import AWS3 from "../../images/certificat3.svg";
import AWS4 from "../../images/certificat4.svg";
import AWS5 from "../../images/certificat5.svg";
import AWS6 from "../../images/certificat6.svg";
import Azure from "../../images/azure.svg";
import kubernetes2 from "../../images/kubernetes2.svg";
import kubernetes1 from "../../images/kubernetes1.svg";

const Certifications = () => {
  return (
    <div className="bg-[#F5F8FA] py-5">
      <div className="container">
        <div className=" text-primary text-3xl text-center font-bold py-20">
          <h1>Certifications</h1>
        </div>
        <div className="flex lg:flex-row flex-col justify-between">
          <div>
            <h3 className=" text-secondary text-xl font-semibold text-center">
              Certification AWS
            </h3>
            <div className="lg:max-w-[450px] flex justify-center flex-wrap py-6">
              {awsCertificates.map((item, index) => {
                return (
                  <div className="py-4" key={index}>
                    <img src={item.img} alt="AWSF" />
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className=" text-secondary text-xl font-semibold text-center">
              Certification Azure
            </h3>
            <div>
              {azureCertificate.map((item, index) => {
                return (
                  <div className="flex justify-center py-10" key={index}>
                    <img src={item.img} alt="Azure" />
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className=" text-secondary text-xl font-semibold text-center">
              Certification Kubernetes
            </h3>
            <div className="flex justify-center py-10 gap-5">
              {kubernetes.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item.img} alt="Azure" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;

const awsCertificates = [
  {
    img: AWS1,
  },
  {
    img: AWS2,
  },
  {
    img: AWS3,
  },
  {
    img: AWS4,
  },
  {
    img: AWS5,
  },
  {
    img: AWS6,
  },
];

const azureCertificate = [
  {
    img: Azure,
  },
];

const kubernetes = [
  {
    img: kubernetes1,
  },
  {
    img: kubernetes2,
  },
];
