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
        <h4 className="text-lg font-semibold pb-2 transition ease-in-out duration-700 delay-500">
          Welcome to my portfolio! 🙋‍♂️
        </h4>
        <p className="font-semibold transition ease-in-out duration-700 delay-700">
          Feel free to have a look around. This is a fun little project I did as
          a hobby project to try out some new technologies, and to hopefully
          inspire myself to create even more spare-time projects in the future.
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default LandingIntroTextBlock;
