import { useEffect } from "react";
import { AnimatePresence, useAnimation, motion } from "framer-motion";
import { SiDocker, SiGraphql } from "react-icons/si";
import { TechCards } from "../collections/TechnologyCardsPrimary";
import TechnologyAccordionsHandler from "../collections/TechnologyAccordionsPrimary";
import { TechPills } from "../collections/TechnologyPillsSecondary";
import TechnologyCircle from "../minor/TechnologyCircle";
import CPlusPlusLogo from "../../assets/images/technologies/c_plus_plus.svg";
import AngularLogo from "../../assets/images/technologies/angular.svg";
import FirebaseLogo from "../../assets/images/technologies/firebase.svg";
import PhpLogo from "../../assets/images/technologies/php.svg";
import TechnologyCircles from "../collections/TechnologyCircles";
import SectionHeader from "../minor/SectionHeader";
import { SectionInterface } from "../../types/sectionInterface";

interface TechnologiesProps extends SectionInterface {}

const Technologies = ({ sectionRef, inView }: TechnologiesProps) => {
  // TODO: Move cards to component and map them instead
  //       Collect Card and accordion into one
  return (
    <section
      id="technologies-section"
      className=" dark:bg-[#11162e] bg-[#fff7ed]"
    >
      <div ref={sectionRef} className="mx-2 w-5/6">
        <SectionHeader
          title="Technologies and languages"
          description={
            <p className="pb-4">
              Below I've listed alot of the technologies that I've come across
              at both the university and the work place. I've sorted them by how
              much experience I have with them.
            </p>
          }
        />
        <div className="pb-5">
          <h3 className="pb-3 font-bold text-lg">Primary</h3>
          <p className="text-sm">
            These are the technologies I have overall used the most, also
            outside of work.
          </p>
        </div>
        <div className=" hidden md:grid xl:grid-cols-3 lg:grid-cols-2 md:grid-rows-3 md:gap-4 mb-5">
          {TechCards.map((card) => card)}
        </div>
        <div className="md:hidden w-full flex justify-center items-center pb-5">
          <TechnologyAccordionsHandler />
        </div>
        <div className="pb-5">
          <h3 className="pb-3 font-bold text-lg">Secondary</h3>
          <p className="text-sm">These technologies I have used quite a bit.</p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-5">
          {TechPills.map((pill) => pill)}
        </div>
        <div className="pb-3">
          <h3 className="pb-3 font-bold text-lg">Little experience</h3>
          <p className="text-sm">
            These technologies I haven't used much in practice, but I have a
            quite good understanding of them all.
          </p>
        </div>
        <div className="mb-6 grid grid-row-2 grid-cols-3 sm:grid-cols-6 xl:grid-cols-12">
          <TechnologyCircles />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
