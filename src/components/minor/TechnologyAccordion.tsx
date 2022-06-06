import classNames from "classnames";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { opacityVariants } from "../../types/transitionVariants";

export type TechnologyAccordionType = {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  isActive: boolean;
  setIsActive: (id: string) => void;
  id: string;
  // index: number;
  // activeIndex: number;
  // setActiveIndex: (state: number) => void;
};

const TechnologyAccordion = ({
  title,
  children,
  icon,
  isActive,
  setIsActive,
  id,
}: TechnologyAccordionType) => {
  const controls = useAnimation();
  const [accordionRef, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const contentSpace = useRef(null);

  function toggleAccordion() {
    if (isActive) setIsActive("");
    else setIsActive(id);
  }
  return (
    <AnimatePresence>
      <motion.div
        variants={opacityVariants}
        initial="hidden"
        exit={"visible"}
        animate={controls}
        ref={accordionRef}
      >
        <div className="mb-2 select-none w-full transition duration-300 ease-in-out shadow-xl rounded-xl bg-gradient-to-t p-1 dark:from-[#43cea2] dark:to-[#185a9d] from-[#ff7e5f] to-[#feb47b] h-full">
          <div className=" dark:bg-[#0d1321] bg-white rounded-lg h-full w-full px-4 py-2">
            <div
              className={classNames(
                isActive
                  ? "border-b-2 dark:border-b-sky-900 border-b-orange-300"
                  : "",
                "box-border appearance-none cursor-pointer focus:outline-none shadow-none flex items-center justify-between pb-2"
              )}
              onClick={toggleAccordion}
            >
              <div className="flex justify-center items-center">
                {icon}
                <p className="pl-2 inline-block font-semibold">{title}</p>
              </div>

              <FiChevronDown
                className={classNames(
                  isActive ? "rotate-180" : "rotate-0",
                  "dark:text-white text-black transition ease-in-out duration-300"
                )}
                size={20}
              />
            </div>
            <div
              ref={contentSpace}
              style={{
                maxHeight: isActive
                  ? // @ts-ignore
                    `${contentSpace.current.scrollHeight}px`
                  : "0px",
              }}
              className="overflow-auto transition-max-height duration-700 ease-in-out"
            >
              {children}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TechnologyAccordion;
