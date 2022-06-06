import classNames from "classnames";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { opacityVariants } from "../../types/transitionVariants";

type ExperiencecardType = {
  icon: string;
  text: string;
  title: string;
  position: string;
  date: string;
};

const ExperienceCard = ({
  icon,
  date,
  position,
  text,
  title,
}: ExperiencecardType) => {
  const controls = useAnimation();
  const [experienceCardRef, inView] = useInView();

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
        ref={experienceCardRef}
        className="col-span-3 row-span-1 xl:col-span-1 transition duration-300 ease-in-out shadow-xl rounded-xl bg-gradient-to-t p-[3px] dark:from-[#43cea2] dark:to-[#185a9d] from-[#ff7e5f] to-[#feb47b] mx-2 h-full"
      >
        <div className="relative dark:bg-[#0d1321] bg-white rounded-lg h-full w-full p-2">
          <div className="flex justify-center -translate-y-12">
            <div className="flex justify-center items-center  rounded-full dark:bg-[#185a9d] bg-[#feb47b] p-[3px]  w-20 h-20">
              <div className="dark:bg-[#0d1321] bg-white rounded-full p-2 w-full h-full flex justify-center items-center">
                <img src={icon} className="box-border  " />
              </div>
            </div>
          </div>
          <div className="-translate-y-12">
            <div className="flex justify-center">
              <h2 className="xl:text-2xl lg:text-xl md:text-xl font-bold">
                {title}
              </h2>
            </div>
            <div className="flex justify-center">
              <h3 className="lg:text-lg md:text-base font-semibold">
                {position}
              </h3>
            </div>
            <div className="flex justify-center">
              <p className="text-sm">{date}</p>
            </div>
            <div className="border-b-2 dark:border-sky-900 border-b-orange-300 w-full py-2" />
            <div className="pt-2">{text}</div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExperienceCard;
