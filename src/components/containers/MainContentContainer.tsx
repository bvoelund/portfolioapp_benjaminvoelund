import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import lightLandingToTechnologies from "../../assets/images/dividers/lightmode/lightLandingToTechnologies.png";
import lightTechnologiesToExperience from "../../assets/images/dividers/lightmode/lightTechnologiesToExperience.png";
import lightExperienceToPersonal from "../../assets/images/dividers/lightmode/lightExperienceToPersonal.png";
import lightPersonalToMyWork from "../../assets/images/dividers/lightmode/lightPersonalToMyWork.png";
import darkLandingToTechnologies from "../../assets/images/dividers/darkmode/darkLandingToTechnologies.png";
import darkTechnologiesToExperience from "../../assets/images/dividers/darkmode/darkTechnologiesToExperience.png";
import darkExperienceToPersonal from "../../assets/images/dividers/darkmode/darkExperienceToPersonal.png";
import darkPersonalToMyWork from "../../assets/images/dividers/darkmode/darkPersonalToMyWork.png";
import Landing from "../sections/Landing";
import Technologies from "../sections/Technologies";
import Experience from "../sections/Experience";
import Personal from "../sections/Personal";
import img from "../../assets/images/dividers/test4.png";
import MyWork from "../sections/MyWork";

type MainContentContainerProps = {
  scrollPosition: number;
};

const MainContentContainer = ({
  scrollPosition,
}: MainContentContainerProps) => {
  const controls = useAnimation();
  const [personalRef, inView] = useInView();
  const [landingRef, landingInView] = useInView();
  const [experienceRef, inView3] = useInView();
  const [technologiesRef, inView4] = useInView();
  const controls2 = useAnimation();
  const [myWorkRef, inView2] = useInView();

  //TODO: Rename these
  //Initiates fly in animations
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (inView2) {
      controls2.start("visible");
    }
  }, [controls, inView, inView2]);

  return (
    <div className="flex justify-center items-center w-screen md:p-8">
      <div className="md:w-5/6 w-11/12 opacity-90">
        <div className=" rounded-3xl shadow-lg mt-3 md:mt-0">
          <Landing
            sectionRef={landingRef}
            inView={landingInView}
            scrollPosition={scrollPosition}
          />
          <img
            className="hidden dark:block w-full max-h-80 h-56"
            src={darkLandingToTechnologies}
            alt="landingToTechnologiesDivider"
          ></img>
          <img
            className="dark:hidden block w-full max-h-80 h-56"
            src={lightLandingToTechnologies}
            alt="landingToTechnologiesDivider"
          ></img>
          {/* <div className="hidden dark:block spacer layer1"></div> */}
          {/* <div className="dark:hidden block spacer layer3"></div> */}

          <Technologies sectionRef={technologiesRef} inView={inView4} />
          <img
            className="hidden dark:block w-full max-h-80 h-56"
            src={darkTechnologiesToExperience}
            alt="technologiesToExperienceDivider"
          ></img>
          <img
            className="dark:hidden block w-full max-h-80 h-56 m-0"
            src={lightTechnologiesToExperience}
            alt="technologiesToExperienceDivider"
          ></img>
          <Experience sectionRef={experienceRef} inView={inView3} />
          <img
            className="hidden dark:block w-full max-h-80 h-56"
            src={darkExperienceToPersonal}
            alt="experienceToPersonalDivider"
          ></img>
          <img
            className="dark:hidden block w-full max-h-80 h-56"
            src={lightExperienceToPersonal}
            alt="experienceToPersonalDivider"
          ></img>
          <Personal sectionRef={personalRef} inView={inView} />
          {/* <div className="hidden dark:block spacer layer2"></div> */}
          <img
            className="hidden dark:block w-full max-h-80 h-56"
            src={darkPersonalToMyWork}
            alt="personalToWorkDivider"
          ></img>
          <img
            className="dark:hidden block w-full max-h-80 h-56"
            src={lightPersonalToMyWork}
            alt="personalToWorkDivider"
          ></img>
          {/* FIX THIS SECTION - CREATES GAPS */}

          <MyWork sectionRef={myWorkRef} inView={inView2} />
        </div>
        {/* 
    <div className="bg-white dark:bg-[#1f2937] rounded-3xl -skew-x-6 shadow-lg">
      <div className="skew-x-6"></div>
    </div> */}
      </div>
    </div>
  );
};

export default MainContentContainer;
