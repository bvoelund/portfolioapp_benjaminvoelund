import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { SectionInterface } from "../../types/sectionInterface";
import SectionHeader from "../minor/SectionHeader";
import PersonalBoxes from "../collections/PersonalBoxes";

interface PersonalProps extends SectionInterface {}

const Personal = ({ sectionRef, inView }: PersonalProps) => {
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <section
      id="personal-section"
      className="dark:bg-[#01172F] bg-[#EED7C5] pb-12"
      ref={sectionRef}
    >
      <div className="mx-2 w-5/6">
        <SectionHeader title="About me" />
      </div>
      <PersonalBoxes />
    </section>
  );
};

export default Personal;
