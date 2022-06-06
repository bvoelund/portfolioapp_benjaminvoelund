import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { opacityVariants } from "../../types/transitionVariants";

export type TechnologiesCardMainProps = {
  children: React.ReactNode;
  icon: React.ReactNode;
  header: string;
  amount: string;
};

const TechnologiesCardMain = ({
  children,
  icon,
  header,
  amount,
}: TechnologiesCardMainProps) => {
  const controls = useAnimation();
  const [cardRef, inView] = useInView();

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
        ref={cardRef}
      >
        <div className="col-span-1 row-span-1 h-full delay-200">
          <div className="col-span-1 row-span-1 h-full">
            <div className="hover:scale-[105%] transition duration-300 ease-in-out shadow-xl rounded-xl bg-gradient-to-t p-2 dark:from-[#43cea2] dark:to-[#185a9d] from-[#ff7e5f] to-[#feb47b] mx-2 h-full">
              <div className="relative dark:bg-[#0d1321] bg-white rounded-lg h-full w-full p-4">
                <div className="justify-between flex ">
                  <h2 className="xl:text-2xl lg:text-xl md:text-xl font-bold">
                    {header}
                  </h2>
                  <div className="object-cover rounded-full">{icon}</div>
                </div>
                <div className="border-b-2 dark:border-sky-900 border-b-orange-300 w-1/2 pt-1" />
                <div className="pt-2">{children}</div>
                <div className="border-b-2 dark:border-sky-900 border-b-orange-300 w-1/2 py-2" />
                <p className="italic">Experience: {amount}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TechnologiesCardMain;
