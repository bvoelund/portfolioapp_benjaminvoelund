import React, { useEffect, useState } from "react";
import profilePicture from "../../assets/images/person.png";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionProps } from "../../types/SectionProps";
import RubiksCube from "../../assets/images/personal/rubiks1.jpg";
import Gaming from "../../assets/images/personal/gaming1.jpg";
import Lego from "../../assets/images/personal/lego.jpg";
import PersonalImg from "../../assets/images/personal/personal1.jpg";
import { GiRetroController } from "react-icons/gi";
import { BiFace } from "react-icons/bi";
import { MdOutlineFaceUnlock } from "react-icons/md";
import { SiCoderwall } from "react-icons/si";
import { GrWorkshop } from "react-icons/gr";
import { IconContext } from "react-icons";
import { BsPen } from "react-icons/bs";

interface PersonalProps extends SectionProps {}

const Personal = ({ sectionRef, inView }: PersonalProps) => {
  function getAge(dateString: string) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const leftSectionVariants = {
    visible: {
      x: 0,
      opacity: 1,

      transition: { duration: 1 },
    },
    hidden: { x: -100, opacity: 0 },
  };
  const rightSectionVariants = {
    visible: {
      x: 0,
      opacity: 1,

      transition: { duration: 1 },
    },
    hidden: { x: 100, opacity: 0 },
  };
  //dark:bg-[#002233]
  return (
    <section
      id="personal-section"
      className="flex justify-center items-center dark:bg-[#01172F] bg-[#EED7C5] pb-12"
    >
      <h1 className=" text-3xl italic pb-8 tracking-wide">Who am I?</h1>
      <motion.div
        variants={leftSectionVariants}
        initial="hidden"
        animate={controls}
        ref={sectionRef}
        transition={{
          x: { type: "spring", stiffness: 100 },
          default: { duration: 2 },
        }}
        className="md:grid md:grid-rows-6 xl:grid-rows-3 md:grid-cols-2 gap-4 w-5/6 space-y-4 md:space-y-0"
      >
        <div className=" col-span-2 row-span-1 xl:col-span-1 xl:row-span-1 dark:bg-slate-900 bg-white shadow-2xl rounded-2xl p-5 order-1">
          <div className="flex justify-between">
            <h2 className="text-3xl italic pb-3">Generally speaking...</h2>
            <MdOutlineFaceUnlock
              size={50}
              className="-translate-y-3 translate-x-3 text-orange-300 dark:text-[#43cea2]"
            />
          </div>
          <p className="text-lg">
            I'm {getAge("01-09-1996")} years old and have lived in Denmark all
            my life, currently situated in Aarhus. I recently finished
            university as a Software Engineer at the university, so I'm still
            trying to find my footing in what technologies I like the most. I
            live in together with my girlfriend and quite close to my family. I
            would describe myself as an open person, who's accepted that he is
            really just a big nerd.
          </p>
        </div>
        <div className="col-span-2 row-span-1 xl:col-span-1 xl:row-span-1 order-2">
          <img src={RubiksCube} className="rounded-3xl w-full xl:h-full" />
        </div>

        <div className="col-span-2 row-span-1 xl:col-span-1 xl:row-span-1 dark:bg-[#111827] bg-white shadow-2xl rounded-2xl p-5 order-3 xl:order-4">
          <div className="flex justify-between">
            <h2 className="text-3xl italic pb-3">Spare time</h2>
            <GiRetroController
              size={50}
              className="rotate-45 -translate-y-6 translate-x-6 text-orange-300 dark:text-[#43cea2]"
            />
          </div>
          <p className="text-lg">
            I've always been in deep touch with my nerdy side, which comes into
            flurition in a lot of ways. This ranges from computer games, Lego,
            Rubik's Cube, you name it. I spent a lot of time with my girlfriend,
            friends and family. I also play on a football team a few times a
            week, which is a sport I've always enjoyed and picked back up
            recently. I normal day for me would be going to work, and enjoying
            myself with video games and spare-time programming.
          </p>
        </div>
        <div className="col-span-2 row-span-1 xl:col-span-1 xl:row-span-1 order-4 xl:order-3">
          <img src={Gaming} className="rounded-3xl w-full xl:h-full" />
        </div>

        <div className="col-span-2 row-span-1 xl:col-span-1 xl:row-span-1 dark:bg-[#111827] bg-white shadow-2xl rounded-2xl p-5 order-5">
          <div className="flex justify-between">
            <h2 className="text-3xl italic pb-3">The ideal job</h2>
            <BsPen
              size={40}
              className="-translate-y-2 translate-x-2 text-orange-300 dark:text-[#43cea2]"
            />
          </div>
          <p className="text-lg">
            The ideal way for me to work, is in a position where I feel that I
            challenge myself. Being quite new to the game, I like to consume as
            much knowledge as humanly possible. It's important to me that I feel
            like I contribute with decision making, and that my voice is being
            heard. I like being social with my colleagues, and to be able to
            share knowledge with them. Work ethics should be priotized highly in
            the company, and people should matter more than the product.
          </p>
        </div>
        <div className="col-span-2 row-span-1 xl:col-span-1 xl:row-span-1 order-6">
          <img src={Lego} className="rounded-3xl w-full xl:h-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Personal;
