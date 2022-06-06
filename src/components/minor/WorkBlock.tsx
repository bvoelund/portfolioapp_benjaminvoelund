import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { flyInFromBottom } from "../../types/transitionVariants";

type WorkBlockProps = {
  progressText: React.ReactNode;
  blockText?: string;
  images: string[];
  showWorkModal: boolean;
  setShowWorkModal: (toggle: boolean) => void;
  setModalImages: (images: string[]) => void;
  modalTitle: string;
  setModalTitle: (title: string) => void;
  modalText: string | React.ReactNode;
  setModalText: (text: React.ReactNode) => void;
  setUsedTechnologies: (state: React.ReactNode) => void;
  usedTechnologies: React.ReactNode;
  externalLink: string;
  setExternalLink: (link: string) => void;
};

const WorkBlock = ({
  progressText,
  blockText,
  images,
  showWorkModal,
  setShowWorkModal,
  setModalImages,
  modalTitle,
  setModalTitle,
  modalText,
  setModalText,
  setUsedTechnologies,
  usedTechnologies,
  externalLink,
  setExternalLink,
}: WorkBlockProps) => {
  const controls = useAnimation();
  const [blockRef, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <AnimatePresence>
      <motion.div
        variants={flyInFromBottom}
        initial="hidden"
        animate={controls}
        ref={blockRef}
      >
        <div>
          {/* Extend transtition */}
          <div className="transition-all ease-out duration-500 transform opacity-100 translate-y-0">
            <h1 className="text-3xl font-medium leading-tight tracking-wide md:text-5xl">
              {modalTitle}
            </h1>
          </div>
        </div>
        <div>
          <div className="delay-100 transition-all ease-out duration-500 transform opacity-100 translate-y-0">
            <p className="italic text-xs py-1">{progressText}</p>
            <p className="text-xs md:text-base leading-loose flex">
              {blockText}
              <p
                className="ml-1 underline text-[#f3a183] dark:text-[#43cea2] cursor-pointer whitespace-nowrap"
                onClick={() => {
                  setShowWorkModal(!showWorkModal);
                  setModalImages(images);
                  setModalTitle(modalTitle);
                  setModalText(modalText);
                  setUsedTechnologies(usedTechnologies);
                  setExternalLink(externalLink);
                }}
              >
                Read more
              </p>
            </p>
          </div>
        </div>
        <div>
          <div className="mt-4 delay-200 transition-all ease-out duration-500 transform opacity-100 translate-y-0">
            <div className="relative w-full overflow-hidden shadow-2xl">
              <div className="block overflow-hidden relative box-border m-0 ">
                <img
                  src={images[0]}
                  className="h-full w-full rounded-3xl"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WorkBlock;
