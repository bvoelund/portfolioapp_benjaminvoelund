import React from "react";
import { ImCheckmark } from "react-icons/im";
import LandingCheckmark from "./LandingCheckmark";
import LandingPersonalInfo from "./LandingPersonalInfo";

const LandingInformation = () => {
  return (
    <div className="col-span-2 lg:col-span-3">
      <div className="flex flex-col justify-center mb-6">
        <div className="md:text-xl zero:text-base mt-4 border-l-4 zero:pl-2 md:pl-5 border-orange-300 dark:border-sky-300 md:mb-8 mb-3">
          <p className="font-semibold">Software engineer</p>
          {/* <div className="flex items-center">
                        <GiGraduateCap size={16} />
                        <p className="text-sm pl-1">Aarhus University</p>
                      </div> */}
        </div>
        <h3 className="text-2xl lg:text-5xl md:text-3xl concert mb-6 whitespace-nowrap">
          Benjamin Vølund
        </h3>
        <LandingPersonalInfo />

        <LandingCheckmark text="Currently working with ReactJS" />
        <LandingCheckmark text="Recently finished university" />
        <LandingCheckmark text="Nerdy and up for a challenge!" />
      </div>
    </div>
  );
};

export default LandingInformation;
