import React, { useEffect, useState } from "react";
import profilePicture from "../../assets/images/person.png";
import me from "../../assets/images/personal/me.png";
import dkFlag from "../../assets/images/personal/denmark.png";
import ukFlag from "../../assets/images/personal/english.svg";
import { ImCheckmark } from "react-icons/im";
import {
  AiOutlineMessage,
  AiOutlineDownload,
  AiOutlineArrowDown,
} from "react-icons/ai";
import ContactMeButton from "../minor/ContactMeButton";
import "../../../src/index.css";
import classNames from "classnames";
import SocialMedias from "../minor/SocialMedias";
import DownloadResumeButton from "../minor/DownloadResumeButton";
import CV_BenjaminVoelund_Dansk from "../../assets/documents/cv/CV_BenjaminVoelund_Dansk.pdf";
import { SectionProps } from "../../types/SectionProps";
import { useAnimation } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import { BiDownArrowAlt } from "react-icons/bi";
import { FaHeadset } from "react-icons/fa";
import { SiCoderwall } from "react-icons/si";
import { Link } from "react-scroll";
import TestModal from "../minor/DownloadModal";
//0d1321

interface LandingProps extends SectionProps {
  scrollPosition: number;
}

const Landing = ({ sectionRef, inView, scrollPosition }: LandingProps) => {
  const [loaded, setLoaded] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const leftSectionVariants = {
    visible: {
      ý: 0,
      opacity: 1,

      transition: { duration: 1 },
    },
    hidden: { y: -100, opacity: 0 },
  };

  useEffect(() => {
    if (showModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [showModal]);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  });
  return (
    <section className="flex justify-center items-center bg-white dark:bg-[#0d1321] rounded-t-3xl pt-8">
      <TestModal showModal={showModal} setShowModal={setShowModal} />
      <div
        ref={sectionRef}
        className="grid grid-cols-2 grid-rows-2 md:grid-rows-1 gap-x-4 w-11/12"
      >
        <div
          className={
            loaded
              ? "translate-y-0 opacity-100 transition ease-in-out duration-500 zero:col-span-2 lg:col-span-1 row-span-1 zero:order-2 lg:order-1 flex justify-center lg:items-center"
              : "translate-y-14 opacity-0 transition ease-in-out"
          }
        >
          <div className="">
            <div className="grid grid-cols-2 grid-rows-2">
              <div className="col-span-1 lg:col-span-2 row-span-2 lg:row-span-1">
                <div className="mb-6">
                  <div>
                    <div className="w-full text-left">
                      <p className="md:text-xl zero:text-base mt-4 border-l-4 zero:pl-2 md:pl-5 border-orange-300 dark:border-sky-300 font-semibold md:mb-8 mb-3">
                        Software engineer
                      </p>
                      <h3 className="text-2xl lg:text-5xl md:text-3xl concert mb-6 whitespace-nowrap">
                        Benjamin Vølund
                      </h3>
                    </div>
                    <span className="flex items-center mb-4">
                      <div className="md:p-3 p-1 mr-2 rounded-full dark:from-green-400 dark:to-green-400 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]">
                        <ImCheckmark className="fill-white" />
                      </div>
                      <p className="md:text-lg text-sm md:italic">
                        Full stack developer
                      </p>
                    </span>
                    <span className="flex items-center mb-4">
                      <div className="md:p-3 p-1 mr-2 rounded-full dark:from-green-400 dark:to-green-400 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]">
                        <ImCheckmark className="fill-white" />
                      </div>
                      <p className="md:text-lg text-sm md:italic">
                        Recent experience in front development
                      </p>
                    </span>
                    <span className="flex items-center">
                      <div className="md:p-3 p-1 mr-2 rounded-full dark:from-green-400 dark:to-green-400 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b]">
                        <ImCheckmark className="fill-white" />
                      </div>
                      <p className="md:text-lg text-sm md:italic">
                        Certified nerd
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-1 lg:col-span-2 row-span-2 lg:row-span-1">
                <div className="block justify-center items-center py-2">
                  <SocialMedias />
                  <div className="flex justify-center items-center">
                    <div className="dark:border-b-white border-b-gray-400 border-b-2 mb-4 pb-4 w-1/2 "></div>
                  </div>
                  <div className="flex justify-center mb-4 md:text-base text-sm ">
                    <div className="w-4/6 lg:w-full text-center">
                      <p className="font-semibold">
                        Send me an email or download my resume
                      </p>
                    </div>
                  </div>
                  <div className="lg:flex block justify-center items-center">
                    <div className="flex justify-center items-center mb-4">
                      <ContactMeButton />
                    </div>
                    <div className="flex justify-center items-center mb-4">
                      <DownloadResumeButton
                        flag={dkFlag}
                        downloadFile={CV_BenjaminVoelund_Dansk}
                        setShowResumeModal={setShowModal}
                        showResumeModal={showModal}
                      />
                    </div>
                    {/* <div className="flex justify-center items-center mb-4">
                      <DownloadResumeButton
                        flag={ukFlag}
                        downloadFile={CV_BenjaminVoelund_Dansk}
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <p className="pt-8 font-semibold block md:hidden">
              Welcome to my portfolio. Feel free to have a look around. I
              created this project as a fun hobby project to try out some new
              technologies, and to hopefully inspire myself to create even more
              spare-time projects in the future.
            </p>
          </div>
        </div>
        <div className="zero:col-span-2 lg:col-span-1 row-span-1 col-span-1  zero:order-1 lg:order-2 flex justify-center lg:mx-4 mb-10">
          {/* <div className="transform md:skew-x-12 bg-orange-300 rounded-3xl pt-5 p-5 shadow-2xl"> */}
          <div className="w-full md:shadow-2xl bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] dark:from-[#43cea2] dark:to-[#185a9d]  h-full rounded-t-3xl rounded-b-md flex justify-center max-h-[515px]">
            <img
              src={me}
              className={classNames(
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-14 opacity-0",
                "transition ease-in-out duration-1000 z-10 pb-0 max-h-[515px] h-full"
              )}
            ></img>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center lg:w-1/2 w-5/6">
        <p className="font-semibold md:block hidden">
          Welcome to my portfolio. Feel free to have a look around. I created
          this project as a fun hobby project to try out some new technologies,
          and to hopefully inspire myself to create even more spare-time
          projects in the future.
        </p>
      </div>
      <div className="lg:flex justify-between items-center w-5/6 hidden">
        <SiCoderwall
          size={100}
          className="rotate-180 text-orange-400 dark:text-[#43cea2]"
        />
        {/* <div
          className={classNames(
            inView && scrollPosition === 0 ? "opacity-100" : "opacity-0",
            "transition duration-500 delay-500 ease-in-out flex justify-center items-center mt-8 hover:cursor-pointer"
          )}
        ><BiDownArrowAlt size={60} className="animate-bounce" /></div> */}
        <Link
          to={"technologies-section"}
          smooth
          offset={-110}
          className={classNames(
            inView && scrollPosition === 0 ? "opacity-100" : "opacity-0",
            "transition duration-500 delay-500 ease-in-out flex justify-center items-center mt-8 hover:cursor-pointer"
          )}
        >
          <BiDownArrowAlt size={60} className="animate-bounce" />
        </Link>

        <SiCoderwall
          size={100}
          className="text-orange-400 dark:text-[#43cea2]"
        />
      </div>
    </section>
  );
};

export default Landing;
