import { FaReact } from "react-icons/fa";
import TechnologyAccordion from "../minor/Technologies/TechnologyAccordion";
import React, { useMemo, useState } from "react";
import {
  SiBootstrap,
  SiDotnet,
  SiMongodb,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import CSharpLogo from "../../assets/images/technologies/c_sharp.svg";
import CssLogo from "../../assets/images/technologies/css.svg";

const accordions = [
  {
    text: (
      <p className="p4">
        React is what I primarily use for frontend developing, and also what I
        used to create this application. I have used it for various hobby
        projects, and in the workplace as well. I find it to be an overall great
        library, and it really sparkled my interest in frontend development. I
        really only use this in conjuction with TypeScript.
      </p>
    ),
    icon: <FaReact color="#61dafb" size={24} />,
    id: "1",
    title: "React",
  },
  {
    text: (
      <p className="p4">
        I strongly prefer TypeScript over JavaScript, though I have experience
        with both. I find TypeScript to leave you with better-quality and
        safeguarded code. I learned coding through the object-oriented approach,
        which I feel is much more supported here, defining types etc.
      </p>
    ),
    icon: (
      <div className="bg-white rounded-3xl w-fit">
        <SiTypescript color="#3178c6" size={24} />
      </div>
    ),
    id: "2",
    title: "TypeScript",
  },
  {
    text: (
      <p className="p4">
        Tailwind is really the reason I made this portfolio, because I really
        wanted to make something with it. And... it's just great. For me
        personally I like styling to be very explicit, in the sense that you
        don't have to jump back and forth between css and component and maintain
        a css file. This library is just awesome, and has really appealed to me
        ever since I started using it.
      </p>
    ),
    icon: <SiTailwindcss color="#38bdf8" size={24} />,
    id: "3",
    title: "Tailwind",
  },
  {
    text: (
      <p className="p4">
        The Non-SQL database solution I've used the most. I've mainly used this
        for school work, while studying at the university. This centers around
        setting up the database itself, as well creating an integration to the
        backend system. I find the document-based approach very easy to
        understand and optimal for certain sets of data. A very nice tool
        overall.
      </p>
    ),
    icon: <SiMongodb color="#12924f" size={24} />,
    id: "4",
    title: "MongoDB",
  },
  {
    text: (
      <p className="p4">
        The language that made me understand how programming works
        <p className="dark:inline hidden">&#x1F49C;</p>
        <p className="inline dark:hidden">&#129505;</p>. I find the syntax and
        possibilities with this language and the infrastrcuture behind it with
        ASP.NET just leaves a lot of opportunities with this language.
      </p>
    ),
    icon: <img src={CSharpLogo} className="h-6 w-6" />,
    id: "5",
    title: "C#",
  },
  {
    text: (
      <p className="p4">
        Used for both schoolwork and in the workplace. Using CSS alongside
        ReactJs, makes for a very structured component/styling structure,
        keeping the two closely together. Sass is a powerful preprocessor, but
        in my opinion it can quickly become a too "unspecific" styling approach.
      </p>
    ),
    icon: (
      <div className="flex">
        <img src={CssLogo} className="h-6 w-6" />
        <div className="w-fit bg-white rounded-full">
          <SiSass size={24} color="#cd6799" />
        </div>
      </div>
    ),
    id: "6",
    title: "Css & Sass",
  },
  {
    text: (
      <p className="p4">
        Used for both schoolwork and in the workplace. Using CSS alongside
        ReactJs, makes for a very structured component/styling structure,
        keeping the two closely together. Sass is a powerful preprocessor, but
        in my opinion it can quickly become a too "unspecific" styling approach.
      </p>
    ),
    icon: <SiRedux size={24} color="#764abc" />,
    id: "7",
    title: "Redux",
  },
  {
    text: (
      <p className="p4">
        Used for both schoolwork and in the workplace. Using CSS alongside
        ReactJs, makes for a very structured component/styling structure,
        keeping the two closely together. Sass is a powerful preprocessor, but
        in my opinion it can quickly become a too "unspecific" styling approach.
      </p>
    ),
    icon: <SiDotnet size={24} color="#764abc" />,
    id: "8",
    title: "ASP.NET",
  },
  {
    text: (
      <p className="p4">
        Used for both schoolwork and in the workplace. Using CSS alongside
        ReactJs, makes for a very structured component/styling structure,
        keeping the two closely together. Sass is a powerful preprocessor, but
        in my opinion it can quickly become a too "unspecific" styling approach.
      </p>
    ),
    icon: <SiBootstrap size={24} color="#9013fe" />,
    id: "9",
    title: "Bootstrap",
  },
];

const TechnologyAccordionsHandler = () => {
  const [activeId, setActiveId] = useState("");

  return (
    <div>
      {accordions.map((accordion) => (
        <TechnologyAccordion
          title={accordion.title}
          children={accordion.text}
          icon={accordion.icon}
          isActive={activeId === accordion.id}
          setIsActive={setActiveId}
          id={accordion.id}
        />
      ))}
    </div>
  );
};

export default TechnologyAccordionsHandler;
