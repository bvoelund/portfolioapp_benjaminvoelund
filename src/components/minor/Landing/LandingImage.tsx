import classNames from "classnames";
import { AnimatePresence, useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import me from "../../../assets/images/personal/me.png";
import {
  flyInFromRight,
  opacityVariants,
} from "../../../types/transitionVariants";

const LandingImage = () => {
  const controls = useAnimation();
  const [imageRef, inView] = useInView();
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
        ref={imageRef}
        className="w-full md:shadow-2xl bg-gradient-to-r from-[#feb47b] to-[#ff7e5f] dark:from-[#43cea2] dark:to-[#185a9d]  h-full rounded-t-3xl rounded-b-md flex justify-center max-h-[515px]"
      >
        <motion.div
          variants={flyInFromRight}
          initial="hidden"
          exit={"visible"}
          animate={controls}
          ref={imageRef}
        >
          <img src={me} className={"z-10 pb-0 max-h-[515px] h-full"}></img>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LandingImage;
