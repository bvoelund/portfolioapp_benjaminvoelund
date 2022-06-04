import { FaReact } from "react-icons/fa";
import {
  SiAndroid,
  SiBootstrap,
  SiCsharp,
  SiCss3,
  SiDotnet,
  SiJavascript,
  SiJest,
  SiMaterialui,
  SiMongodb,
  SiNodedotjs,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import TechnologyPill from "../minor/TechnologyPill";
import JavaLogo from "../../assets/images/technologies/java-logo-1.png";
import Jest from "../../assets/images/technologies/jest.svg";
import DrupalIcon from "../../assets/images/technologies/druplicon-small.png";

export const TechPills = [
  // <TechnologyPill
  //   header="Java"
  //   icon={
  //     <div className="flex justify-center items-center">
  //       <img src={JavaLogo} className="h-8 w-8" />
  //     </div>
  //   }
  // />,
  <TechnologyPill
    header="Android"
    icon={
      <div className="flex justify-center items-center">
        <SiAndroid className="w-6 h-6 md:w-8 md:h-8" color="#3ddb85" />
      </div>
    }
  />,
  <TechnologyPill
    header="JavaScript"
    icon={
      <div className="bg-black w-fit ">
        <SiJavascript className="w-6 h-6 md:w-8 md:h-8" color="#f7df1e" />
      </div>
    }
  />,
  <TechnologyPill
    header="NodeJs"
    icon={<SiNodedotjs className="w-6 h-6 md:w-8 md:h-8" color="#3c873a" />}
  />,
  // <TechnologyPill
  //   header="Bootstrap"
  //   icon={<SiBootstrap className="w-6 h-6 md:w-8 md:h-8" color="#9013fe" />}
  // />,
  <TechnologyPill
    header="Material-UI"
    icon={<SiMaterialui className="w-6 h-6 md:w-8 md:h-8" color="#00b0ff" />}
  />,
  <TechnologyPill
    header="Drupal"
    icon={<img src={DrupalIcon} className="h-8 w-7" />}
  />,
  <TechnologyPill
    header="WPF"
    icon={<SiDotnet className="w-6 h-6 md:w-8 md:h-8" color="#764abc" />}
  />,
  <TechnologyPill
    header="Jest"
    icon={<img src={Jest} className="w-6 h-6 md:w-8 md:h-8" />}
  />,
];
