import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { MdAlternateEmail, MdLocationPin } from "react-icons/md";

const LandingPersonalInfo = () => {
  return (
    <div className="2xl:flex 2xl:flex-row 2xl:space-x-4 mb-8">
      <div className="flex whitespace-nowrap flex-start 2xl:justify-center items-center pb-3 2xl:pb-0">
        <div className="pr-1">
          <AiFillPhone size={25} />
        </div>
        <p className="text-xs md:text-sm font-medium">+45 26 15 90 59</p>
      </div>
      <div className="flex whitespace-nowrap flex-start 2xl::justify-center items-center pb-3 2xl:pb-0">
        <div className="pr-1">
          <MdLocationPin size={25} />
        </div>
        <p className="text-xs md:text-sm font-medium">Aarhus, Denmark</p>
      </div>
      <div className="flex whitespace-nowrap flex-start 2xl:justify-center items-center">
        <div className="pr-1">
          <MdAlternateEmail size={25} />
        </div>
        <p className="text-xs md:text-sm font-medium">bvoelund@hotmail.com</p>
      </div>
    </div>
  );
};

export default LandingPersonalInfo;
