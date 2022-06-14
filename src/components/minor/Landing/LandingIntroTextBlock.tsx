import classNames from "classnames";
import React, { useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LandingIntroTextBlock = () => {
  const controls = useAnimation();
  const [introTextRef, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const landingIntroTextBlockVariants = {
    visible: {
      y: 0,
      opacity: 1,

      transition: { duration: 1 },
    },
    hidden: { y: 100, opacity: 0 },
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={landingIntroTextBlockVariants}
        initial="hidden"
        exit={"visible"}
        animate={controls}
        ref={introTextRef}
      >
        <div className={inView ? "block" : "hidden"}>
          <div className="typing-animation-intro w-[22ch] whitespace-nowrap overflow-hidden pb-2 font-semibold md:text-lg">
            Welcome to my portfolio! 🙋‍♂️
          </div>
        </div>
        <p className="font-semibold md:text-base text-sm">
          Feel free to have a look around. Below you can read about my prefered
          technologies, my working experience, me as a person and my spare time
          projects. Feel free to contact me or checkout some of my projects.
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default LandingIntroTextBlock;
