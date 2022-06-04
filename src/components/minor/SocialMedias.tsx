import React from "react";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const SocialMedias = () => {
  const medias = [
    {
      href: "https://www.linkedin.com/in/bvoelund/",
      icon: (
        <AiOutlineLinkedin
          size={36}
          className="dark:hover:fill-sky-300 hover:fill-orange-300 hover:scale-110"
        />
      ),
    },
    {
      href: "https://github.com/bvoelund",
      icon: (
        <AiOutlineGithub
          size={36}
          className="dark:hover:fill-sky-300 hover:fill-orange-300 hover:scale-110"
        />
      ),
    },
  ];

  return (
    <div className="flex justify-center items-center">
      {medias.map((m) => (
        <a className="flex px-1" href={m.href} target="_blank">
          {m.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedias;
