import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import JyskLogoSvg from "../../assets/images/companies/jysk.svg";
import KamstrupSvg from "../../assets/images/companies/kamstrup.svg";
import ExperienceCard from "../minor/Experience/ExperienceCard";
import { SectionInterface } from "../../types/sectionInterface";
import SectionHeader from "../minor/SectionHeader";

interface ExperienceProps extends SectionInterface {}

const Experience = ({ sectionRef, inView }: ExperienceProps) => {
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      id="experience-section"
      className=" dark:bg-[#0d1321] bg-white"
      ref={sectionRef}
    >
      <div className="mb-16 mx-2 w-5/6">
        <SectionHeader
          title="Experience"
          description={
            <p className="xl:text-lg text-base">
              Below I've listed my work experiences, which at the moment is
              quite limited. Hopefully, it will be expanded widely in the
              future. Maybe you can help me extend it?
            </p>
          }
        />
      </div>

      <div className="grid grid-cols-3 grid-rows-2 xl:grid-rows-1 w-5/6 mb-8 gap-x-12 gap-y-16">
        <ExperienceCard
          icon={JyskLogoSvg}
          date="Aug. 2022 - Now"
          position="Web Developer"
          text={
            <p className="text-base font-medium">
              Working primarily in ReactJS, but also touched PHP alongside
              Drupal. Worked on both their webshop and helped create a new
              React-based cash register, which is going to be used in all of the
              company stores.
            </p>
          }
          title="Jysk"
        />
        <ExperienceCard
          icon={KamstrupSvg}
          date="Feb. 2020 - July 2020"
          position="Internship"
          text={
            <p className="text-base font-medium">
              Internship as part of study. Created an application to support the
              main product of the team I was in. This was done with WPF,
              alongside C# and the Caliburn.Micro framework.
            </p>
          }
          title="Kamstrup"
        />
      </div>
    </section>
  );
};

export default Experience;
