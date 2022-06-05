import React, { useEffect, useState } from "react";
import profilePicture from "../../assets/pngs/person.png";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionProps } from "../../types/SectionProps";
import test from "../../assets/images/personal/gaming1.jpg";
import stratbook from "../../assets/images/mywork/bachelor/stratbook.png";
import stratbookExampleDrawing from "../../assets/images/mywork/bachelor/stratbook_example_drawing.png";
import stratbookExampleStrats from "../../assets/images/mywork/bachelor/stratbook_example_stratlist.png";
import portfolio from "../../assets/images/mywork/portfolio/portfolio_dark.png";
import WorkModal from "../minor/WorkModal";
import WorkBlock from "../minor/WorkBlock";
import { BiPen } from "react-icons/bi";
import { BsCheckLg, BsPen } from "react-icons/bs";

interface PersonalProps extends SectionProps {}

const MyWork = ({ sectionRef, inView }: PersonalProps) => {
  const controls = useAnimation();
  const [showWorkModal, setShowWorkModal] = useState(false);

  const [modalText, setModalText] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalImages, setModalImages] = useState<Array<string>>([""]);

  useEffect(() => {
    if (showWorkModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [showWorkModal]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const leftSectionVariants = {
    visible: {
      x: 0,
      opacity: 1,

      transition: { duration: 1 },
    },
    hidden: { x: -100, opacity: 0 },
  };

  return (
    <section
      id="mywork-section"
      className=" dark:bg-[#0d1321] bg-white rounded-b-3xl"
    >
      <div className="mb-12 w-5/6">
        <h2 className="text-3xl italic">My work</h2>
        <p className="text-lg">
          Below I have listed some of the projects that I'm either working on or
          have finished up. These are projects that I'm working on, outside of
          work. I program a lot in my spare time, because I want to improve my
          skills overall and to give myself an opinion about what technologies I
          prefer, and overall just to expand my knowledge.
        </p>
      </div>
      <WorkModal
        showModal={showWorkModal}
        setShowModal={setShowWorkModal}
        title={modalTitle}
        text={modalText}
        images={modalImages}
      />
      <motion.div
        variants={leftSectionVariants}
        initial="hidden"
        animate={controls}
        ref={sectionRef}
        transition={{
          x: { type: "spring", stiffness: 100 },
          default: { duration: 2 },
        }}
        className="flex-col flex xl:flex-row w-5/6"
      >
        <div className="flex flex-row-reverse flex-wrap py-16 space-y-16 mx-4  ">
          <div className="w-full xl:w-1/2 md:pl-4">
            <WorkBlock
              progressText={
                <div className="flex items-center">
                  <p className="italic text-sm py-1 pr-2">Finished project</p>
                  <BsCheckLg size={18} />
                </div>
              }
              blockText="The portfolio you're currently looking at"
              images={[portfolio]}
              setShowWorkModal={setShowWorkModal}
              showWorkModal={showWorkModal}
              setModalImages={setModalImages}
              modalTitle={"This portfolio"}
              setModalTitle={setModalTitle}
              modalText="This portfolio is a project I've been wanting to do for a long time. 
              The idea was to motivate myself into making more sparetime projects and play around with new technologies. T
              his was to give muself an idea about which technologies I prefer and which that I don't. 
              The portfolio is made with React, TailwindCss and TypeScript. TailwindCss was something that I had never tried
              out myself, but only heard other people discuss often times. It seemed like a very strange approach to do CSS at first,
              but a lot of people seemed to like it quite a lot. So I decided to try it out."
              setModalText={setModalText}
            />
          </div>
          <div className="w-full xl:w-1/2 md:pr-4 xl:pt-32">
            <WorkBlock
              progressText={
                <div className="flex items-center">
                  <p className="italic text-sm py-1 pr-2">Finished project</p>
                  <BsCheckLg size={18} />
                </div>
              }
              blockText="Bachelor project from university"
              images={[
                stratbook,
                stratbookExampleDrawing,
                stratbookExampleStrats,
              ]}
              setShowWorkModal={setShowWorkModal}
              showWorkModal={showWorkModal}
              setModalImages={setModalImages}
              modalTitle={"Stratbooks"}
              setModalTitle={setModalTitle}
              modalText="Stratbooks is a bachelor project I made along with two other guys. 
              The project was a React application, written with TypeScript. 
              The idea was to create an application where you could create and store tactics for the popular computer game, Counter Strike.
              To make it possible to create these tactics, we made a drawing-tool, as displayed on the image below, where you could define your strategy
              with icons, lines and grenades from the game. All the drawed or inserted elements, would be editable and removable. You would have the option to add additional 
              detail to each added player, by specifying equipment and attach youtube clips to ensure further understanding of the tactic. Saving these tactics, 
              enabled you to collect them in a collection of strategies, or a so called 'Stratbook'. This is showcased on the last image.
              Though it isn't pretty, this was my first 'real' project with React, and what sparkled my interest in frontend development.
              Some extra functionality was a notification/invite-system, creating new stratbooks, user login with JWT tokens, a C# ASP.NET backend with a RESTful API,
              a MongoDB database and hosting on Heroku. The project sadly isn't hosted anymore."
              setModalText={setModalText}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// progressText={
//   <div className="flex items-center">
//     <p className="italic text-sm py-1 pr-2">In progress</p>
//     <BsPen size={18} />
//   </div>
// }

export default MyWork;
