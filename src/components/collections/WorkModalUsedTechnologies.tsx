import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiDotnet,
  SiHeroku,
  SiMaterialui,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import konva from "../../assets/images/mywork/bachelor/konva.png";
import jwt from "../../assets/images/mywork/bachelor/jwt.svg";
import cSharp from "../../assets/images/technologies/c_sharp.svg";
import TechnologyUsed from "../minor/TechnologyUsed";

export const StratbookTechnologies = () => {
  return (
    <>
      <TechnologyUsed
        icon={<FaReact color="#61dafb" size={32} />}
        text={<p className="pl-2">React</p>}
      />
      <TechnologyUsed
        icon={<SiTypescript color="#3178c6" size={32} />}
        text={<p className="pl-2">TypeScript</p>}
      />
      <TechnologyUsed
        icon={<SiMaterialui color="#00b0ff" size={32} />}
        text={<p className="pl-2">MaterialUI</p>}
      />
      <TechnologyUsed
        icon={<img src={jwt} className="h-8 w-8" />}
        text={<p className="pl-2">JWT</p>}
      />
      <TechnologyUsed
        icon={<SiHeroku color="#430098" size={32} />}
        text={<p className="pl-2">Heroku</p>}
      />
      <TechnologyUsed
        icon={<img src={konva} className="h-8 w-8" />}
        text={<p className="pl-2">KonvaJS</p>}
      />
      <TechnologyUsed
        icon={<img src={cSharp} className="h-8 w-8" />}
        text={<p className="pl-2">C#</p>}
      />
      <TechnologyUsed
        icon={<SiDotnet color="#764abc" size={32} />}
        text={<p className="pl-2">ASP.NET</p>}
      />
      <TechnologyUsed
        icon={<SiMongodb color="#12924f" size={32} />}
        text={<p className="pl-2">MongoDb</p>}
      />
    </>
  );
};
export const PortfolioTechnologies = () => {
  return (
    <>
      <TechnologyUsed
        icon={<FaReact color="#61dafb" size={32} />}
        text={<p className="pl-2">React</p>}
      />
      <TechnologyUsed
        icon={<SiTailwindcss color="#38bdf8" size={32} />}
        text={<p className="pl-2">TailwindCss</p>}
      />
      <TechnologyUsed
        icon={<SiTypescript color="#3178c6" size={32} />}
        text={<p className="pl-2">TypeScript</p>}
      />
    </>
  );
};
