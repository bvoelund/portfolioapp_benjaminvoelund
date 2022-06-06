import classNames from "classnames";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { MdOutlineFaceUnlock } from "react-icons/md";
import { useInView } from "react-intersection-observer";

type PersonalBoxProps = {
  text: string | React.ReactNode;
  boxTitle: string | React.ReactNode;
  icon: React.ReactNode;
  transition: any;
  className: string;
};

const PersonalBox = ({
  text,
  boxTitle,
  icon,
  transition,
  className,
}: PersonalBoxProps) => {
  const controls = useAnimation();
  const [boxRef, inView] = useInView();

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
        ref={boxRef}
        className={classNames(
          className,
          "col-span-2 row-span-1 xl:col-span-1 xl:row-span-1 dark:bg-slate-900 bg-white shadow-2xl rounded-2xl p-5"
        )}
      >
        <div className="flex justify-between">
          <h2 className="lg:text-3xl text-2xl italic pb-3">{boxTitle}</h2>
          {icon}
        </div>
        {text}
      </motion.div>
    </AnimatePresence>
  );
};

export default PersonalBox;
