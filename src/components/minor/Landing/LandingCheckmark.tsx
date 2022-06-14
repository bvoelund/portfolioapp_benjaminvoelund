import React from "react";
import { ImCheckmark } from "react-icons/im";

type LandingCheckmarkProps = {
  text: string;
};

const LandingCheckmark = ({ text }: LandingCheckmarkProps) => {
  return (
    <span className="flex items-center mb-4">
      <div className="md:p-2 p-1 mr-2 rounded-full dark:from-green-400 dark:to-green-400 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]">
        <ImCheckmark className="fill-white" />
      </div>
      <p className="md:text-lg text-sm md:italic">{text}</p>
    </span>
  );
};

export default LandingCheckmark;
