import { FaReact } from "react-icons/fa";
import TechnologyAccordion from "../minor/TechnologyAccordion";
import React, { useMemo, useState } from "react";
import CPlusPlusLogo from "../../assets/images/technologies/c_plus_plus.svg";
import AngularLogo from "../../assets/images/technologies/angular.svg";
import FirebaseLogo from "../../assets/images/technologies/firebase.svg";
import PhpLogo from "../../assets/images/technologies/php.svg";
import { SiDocker, SiGraphql } from "react-icons/si";
import TechnologyCircle from "../minor/TechnologyCircle";

const circles = [
  <TechnologyCircle icon={<img src={FirebaseLogo} className="h-10 w-10" />} />,
  <TechnologyCircle icon={<SiGraphql size={40} color="#e535ab" />} />,
  <TechnologyCircle icon={<img src={AngularLogo} className="h-10 w-10" />} />,
  <TechnologyCircle icon={<img src={PhpLogo} className="h-10 w-10" />} />,
  <TechnologyCircle icon={<SiDocker color="#2496ed" size={40} />} />,
  <TechnologyCircle icon={<img src={CPlusPlusLogo} className="h-10 w-10" />} />,
];

const TechnologyCircles = () => {
  return <>{circles.map((circle) => circle)}</>;
};

export default TechnologyCircles;
