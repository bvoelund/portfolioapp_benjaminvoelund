import classNames from "classnames";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  flyInFromBottom,
  flyInFromRight,
} from "../../types/transitionVariants";

type PersonalImageProps = {
  image: string;
  transition: any;
  className: string;
};

const PersonalImage = ({
  image,
  transition,
  className,
}: PersonalImageProps) => {
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
        variants={transition}
        initial="hidden"
        exit={"visible"}
        animate={controls}
        ref={imageRef}
        className={classNames(
          className,
          "col-span-2 row-span-1 xl:col-span-1 xl:row-span-1"
        )}
      >
        <img
          src={image}
          className="rounded-3xl w-full xl:h-full object-cover"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default PersonalImage;
