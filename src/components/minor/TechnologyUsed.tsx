import React from "react";
import { FaReact } from "react-icons/fa";

type TechnologyUsedProps = {
  icon: React.ReactNode | string;
  text: React.ReactNode | string;
};

const TechnologyUsed = ({ icon, text }: TechnologyUsedProps) => {
  return (
    <span className="flex items-center md:pb-0 pb-3">
      {icon}
      {text}
    </span>
  );
};

export default TechnologyUsed;
