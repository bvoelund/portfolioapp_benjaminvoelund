import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { opacityVariants } from "../../types/transitionVariants";

type TechnologyCircleType = {
  icon: React.ReactNode;
  name: string;
};

const TechnologyCircle = ({ icon, name }: TechnologyCircleType) => {
  const controls = useAnimation();
  const [circleRef, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <AnimatePresence>
      <motion.div
        variants={opacityVariants}
        initial="hidden"
        exit={"visible"}
        animate={controls}
        ref={circleRef}
        className="flex flex-col justify-center items-center"
      >
        <div className="hover:animate-spin hover:shadow-none w-fit flex justify-center items-center transition duration-300 ease-in-out shadow-lg rounded-full bg-gradient-to-r p-1 dark:from-[#43cea2] dark:to-[#185a9d] from-[#ff7e5f] to-[#feb47b]">
          <div className=" dark:bg-[#0d1321] bg-white rounded-full h-full w-full p-2">
            {icon}
          </div>
        </div>
        <p className="font-semibold pt-1">{name}</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default TechnologyCircle;
