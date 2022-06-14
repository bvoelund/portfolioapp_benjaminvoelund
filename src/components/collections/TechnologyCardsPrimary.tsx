import { FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiCsharp,
  SiCss3,
  SiDotnet,
  SiMongodb,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import TechnologiesCardMain from "../minor/Technologies/TechnologiesCardMain";
import CSharpLogo from "../../assets/images/technologies/c_sharp.svg";
import CssLogo from "../../assets/images/technologies/css.svg";

export const TechCards = [
  <TechnologiesCardMain
    children={
      <p className="p4">
        React is what I primarily use for frontend development, and also what I
        used to create this application. I have used it for various hobby
        projects, and in the workplace as well. I find it to be an overall great
        library, and it really sparkled my interest in frontend development. I
        really only use this in conjuction with TypeScript.
      </p>
    }
    header="React"
    icon={<FaReact color="#61dafb" size={36} />}
    amount="1.5 years"
  />,
  <TechnologiesCardMain
    children={
      <p className="p4">
        I strongly prefer TypeScript over JavaScript, though I have experience
        with both. I find TypeScript to leave you with better-quality and
        safeguarded code. I learned coding through the object-oriented approach,
        which I feel is much more supported here, defining types etc.
      </p>
    }
    header="Typescript"
    icon={
      <div className="bg-white rounded-3xl w-fit">
        <SiTypescript color="#3178c6" size={36} />
      </div>
    }
    amount="1.5 years"
  />,
  <TechnologiesCardMain
    children={
      <p className="p4">
        Used for both schoolwork and in the workplace. Using CSS alongside
        ReactJs, makes for a very structured component/styling structure,
        keeping the two closely together. Sass is a powerful preprocessor, but
        in my opinion it can quickly become a too "unspecific" styling approach.
      </p>
    }
    header="Redux"
    icon={<SiRedux size={36} color="#764abc" />}
    amount="2 years"
  />,
  <TechnologiesCardMain
    children={
      <p className="p4">
        The Non-SQL database solution I've used the most. I've mainly used this
        for school work, while studying at the university. This centers around
        setting up the database itself, as well creating an integration to the
        backend system. I find the document-based approach very easy to
        understand and optimal for certain sets of data. A very nice tool
        overall.
      </p>
    }
    header="MongoDb"
    icon={<SiMongodb color="#12924f" size={36} />}
    amount="2 years"
  />,
  <TechnologiesCardMain
    children={
      <p className="p4">
        I strongly prefer TypeScript over JavaScript, though I have experience
        with both. I find TypeScript to leave you with better-quality and
        safeguarded code. I learned coding through the object-oriented approach,
        which I feel is much more supported here, defining types etc.
      </p>
    }
    header="Tailwind"
    icon={<SiTailwindcss color="#38bdf8" size={36} />}
    amount="> 1 year"
  />,

  <TechnologiesCardMain
    children={
      <p className="p4">
        The language that made me understand how programming works &#x1F49C;. I
        find the syntax and possibilities with this language and the
        infrastrcuture behind it with ASP.NET just leaves a lot of opportunities
        with this language.
      </p>
    }
    header="C#"
    icon={<img src={CSharpLogo} className="h-9 w-9" />}
    amount="2 years"
  />,
  <TechnologiesCardMain
    children={
      <p className="p4">
        Used for both schoolwork and in the workplace. Using CSS alongside
        ReactJs, makes for a very structured component/styling structure,
        keeping the two closely together. Sass is a powerful preprocessor, but
        in my opinion it can quickly become a too "unspecific" styling approach.
      </p>
    }
    header="Css & Sass"
    icon={
      <div className="flex">
        <img src={CssLogo} className="h-9 w-9" />
        <div className="w-fit bg-white rounded-full">
          <SiSass size={36} color="#cd6799" />
        </div>
      </div>
    }
    amount="2 years"
  />,

  <TechnologiesCardMain
    children={
      <p className="p4">
        Used for both schoolwork and in the workplace. Using CSS alongside
        ReactJs, makes for a very structured component/styling structure,
        keeping the two closely together. Sass is a powerful preprocessor, but
        in my opinion it can quickly become a too "unspecific" styling approach.
      </p>
    }
    header="ASP.NET"
    icon={<SiDotnet size={36} color="#764abc" />}
    amount="2 years"
  />,
  <TechnologiesCardMain
    children={
      <p className="p4">
        Used for both schoolwork and in the workplace. Using CSS alongside
        ReactJs, makes for a very structured component/styling structure,
        keeping the two closely together. Sass is a powerful preprocessor, but
        in my opinion it can quickly become a too "unspecific" styling approach.
      </p>
    }
    header="Bootstrap"
    icon={<SiBootstrap size={36} color="#9013fe" />}
    amount="2 years"
  />,
];
