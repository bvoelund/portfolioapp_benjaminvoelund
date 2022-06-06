import React from "react";
import { BsPen } from "react-icons/bs";
import { GiRetroController } from "react-icons/gi";
import { MdOutlineFaceUnlock } from "react-icons/md";
import PersonalBox from "../minor/PersonalBox";
import RubiksCube from "../../assets/images/personal/rubiks1.jpg";
import Gaming from "../../assets/images/personal/gaming1.jpg";
import Lego from "../../assets/images/personal/lego.jpg";
import PersonalImage from "../minor/PersonalImage";
import { flyInFromLeft, flyInFromRight } from "../../types/transitionVariants";
import getAge from "../../helpers/getAge";

const PersonalBoxes = () => {
  const age = getAge("01-09-1996");
  return (
    <div className="md:grid md:grid-rows-6 xl:grid-rows-3 md:grid-cols-2 gap-4 w-5/6 space-y-4 md:space-y-0">
      <PersonalBox
        boxTitle={"Generally speaking..."}
        text={
          <p className="md:text-lg md:leading-10 leading-8">
            I'm {age} years old and have lived in Denmark all my life, currently
            situated in Aarhus. I recently finished university as a Software
            Engineer at the university, so I'm still trying to find my footing
            in what technologies I like the most. I'm a guy who likes a good
            challenge, and is constantly looking to expand my knowledge. I try
            to do this outside of work as well, by watching/reading material and
            documentation, or creating my own applications like this one. I live
            together with my girlfriend and quite close to my family. I would
            describe myself as an openminded guy, who's just accepted that he is
            really just a big nerd.
          </p>
        }
        icon={
          <MdOutlineFaceUnlock
            size={50}
            className="-translate-y-3 translate-x-3 text-orange-300 dark:text-[#43cea2]"
          />
        }
        transition={flyInFromLeft}
        className="order-1"
      />
      <PersonalImage
        image={RubiksCube}
        transition={flyInFromRight}
        className=" order-2"
      />
      <PersonalBox
        boxTitle={"Spare time"}
        text={
          <p className="md:text-lg md:leading-10 leading-8">
            I've always been in deep touch with my nerdy side, which comes into
            flurition in a lot of ways. This ranges from computer games, Lego,
            Rubik's Cube, you name it. I spent a lot of time with my girlfriend,
            friends and family. I also play on a football team a few times a
            week, which is a sport I've always enjoyed and picked back up
            recently. I normal day for me would be going to work, and enjoying
            myself with video games and spare-time programming.
          </p>
        }
        icon={
          <GiRetroController
            size={50}
            className="rotate-45 -translate-y-6 translate-x-6 text-orange-300 dark:text-[#43cea2]"
          />
        }
        transition={flyInFromRight}
        className="order-3 xl:order-4"
      />
      <PersonalImage
        image={Gaming}
        transition={flyInFromLeft}
        className="order-4 xl:order-3"
      />

      <PersonalBox
        boxTitle={"The ideal job"}
        text={
          <p className="md:text-lg md:leading-10 leading-8">
            The ideal way for me to work, is in a position where I feel that I
            challenge myself. Being quite new to the game, I like to consume as
            much knowledge as humanly possible. It's important to me that I feel
            like I contribute with decision making, and that my voice is being
            heard. I like being social with my colleagues, and to be able to
            share knowledge with them. Work ethics should be priotized highly in
            the company, and people should matter more than the product.
          </p>
        }
        icon={
          <BsPen
            size={40}
            className="-translate-y-2 translate-x-2 text-orange-300 dark:text-[#43cea2]"
          />
        }
        transition={flyInFromLeft}
        className="order-5"
      />
      <PersonalImage
        image={Lego}
        transition={flyInFromRight}
        className="order-6"
      />
    </div>
  );
};

export default PersonalBoxes;
