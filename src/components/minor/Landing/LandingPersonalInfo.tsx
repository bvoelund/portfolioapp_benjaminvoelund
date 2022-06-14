import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { GiGraduateCap } from "react-icons/gi";
import { MdAlternateEmail, MdLocationPin } from "react-icons/md";

type PersonalInfoType = {
  icon: React.ReactNode;
  text: string;
};

const PersonalInfo = ({ icon, text }: PersonalInfoType) => (
  <div className="flex whitespace-nowrap pb-3 md:pb-1">
    <div className="pr-1 md:h-6 md:w-6">{icon}</div>
    <p className="text-xs xl:text-sm font-medium">{text}</p>
  </div>
);

const LandingPersonalInfo = () => {
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
    //   <div className="col-span-1">
    //     <PersonalInfo icon={<AiFillPhone />} text={"+45 26 15 90 59"} />
    //     <PersonalInfo icon={<MdLocationPin />} text={"Aarhus, Denmark"} />
    //   </div>
    //   <div className="col-span-1">
    //     <PersonalInfo
    //       icon={<MdAlternateEmail />}
    //       text={"bvoelund@hotmail.com"}
    //     />
    //     <PersonalInfo icon={<GiGraduateCap />} text={"Aarhus University"} />
    //   </div>
    // </div>
    <div className="2xl:flex 2xl:flex-row 2xl:space-x-4 mb-8">
      <PersonalInfo icon={<AiFillPhone />} text={"+45 26 15 90 59"} />
      <PersonalInfo icon={<MdLocationPin />} text={"Aarhus, Denmark"} />
      <PersonalInfo icon={<MdAlternateEmail />} text={"bvoelund@hotmail.com"} />
    </div>
  );
};

export default LandingPersonalInfo;
