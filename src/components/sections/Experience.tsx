import React, { useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { SectionProps } from "../../types/SectionProps";
import JyskLogo from "../../assets/images/jysk.png";
import JyskLogoSvg from "../../assets/images/companies/jysk.svg";
import KamstrupSvg from "../../assets/images/companies/kamstrup.svg";
import JyskJpg from "../../assets/images/jysk2.jpg";
import ExperienceCard from "../minor/ExperienceCard";

interface ExperienceProps extends SectionProps {}

const Experience = ({ sectionRef, inView }: ExperienceProps) => {
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

  return (
    <section id="experience-section" className=" dark:bg-[#0d1321] bg-white">
      <div className="mb-12 w-5/6">
        <h2 className="text-3xl italic">Experience</h2>
        <p className="text-lg">
          Below I've listed my work experiences, which at the moment is quite
          limited. Hopefully, it will be expanded widely in the future. Maybe
          you can help me extend it?
        </p>
      </div>
      <motion.div
        variants={leftSectionVariants}
        initial="hidden"
        animate={controls}
        ref={sectionRef}
        transition={{
          x: { type: "spring", stiffness: 100 },
          default: { duration: 2 },
        }}
        className="grid grid-cols-3 grid-rows-2 xl:grid-rows-1 w-5/6 mb-8 gap-y-12"
      >
        <ExperienceCard
          icon={JyskLogoSvg}
          date="Aug. 2022 - Now"
          position="Web Developer"
          text="Working primarily in ReactJS, but also touched PHP alongside Drupal.
            Worked on both their webshop and helped create a new React-based cash register, which is going to
            be used in all of the company stores."
          title="Jysk"
        />
        <ExperienceCard
          icon={KamstrupSvg}
          date="Feb. 2020 - July 2020"
          position="Internship"
          text="Internship as part of study. Created an application to support the main product of the team I was in. 
          This was done with WPF, alongside C# and the Caliburn.Micro framework."
          title="Kamstrup"
        />
      </motion.div>
    </section>
  );
};

export default Experience;
