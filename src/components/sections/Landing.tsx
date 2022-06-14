import React, { useEffect, useState } from "react";
import profilePicture from "../../assets/images/person.png";
import me from "../../assets/images/personal/me.png";
import dkFlag from "../../assets/images/personal/denmark.png";
import { ImCheckmark } from "react-icons/im";
import ContactMeButton from "../minor/ContactMeButton";
import "../../../src/index.css";
import classNames from "classnames";
import SocialMedias from "../minor/SocialMedias";
import DownloadResumeButton from "../minor/DownloadResumeButton";
import CV_BenjaminVoelund_Dansk from "../../assets/documents/cv/CV_BenjaminVoelund_Dansk.pdf";
import { useAnimation } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import { BiDownArrowAlt } from "react-icons/bi";
import { FaHeadset } from "react-icons/fa";
import { SiCoderwall } from "react-icons/si";
import { Link } from "react-scroll";
import TestModal from "../minor/DownloadModal";
import { GrBottomCorner, GrTopCorner } from "react-icons/gr";
import LandingIntroTextBlock from "../minor/Landing/LandingIntroTextBlock";
import { SectionInterface } from "../../types/sectionInterface";
import LandingPersonalInfo from "../minor/Landing/LandingPersonalInfo";
import { MdCastForEducation, MdOutlineCastForEducation } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import LandingInformation from "../minor/Landing/LandingInformation";
import LandingContact from "../minor/Landing/LandingContact";
import LandingImage from "../minor/Landing/LandingImage";
//0d1321

interface LandingProps extends SectionInterface {
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
        className="grid grid-cols-2 gap-x-4 w-11/12 auto-rows-auto lg:mb-10"
      >
        <div
          className={
            loaded
              ? "translate-y-0 opacity-100 transition ease-in-out duration-500 zero:col-span-2 lg:col-span-1 row-span-1 zero:order-2 lg:order-1 flex justify-center lg:items-center"
              : "translate-y-14 opacity-0 transition ease-in-out"
          }
        >
          <div className="grid grid-cols-3">
            <LandingInformation />
            <LandingContact setShowModal={setShowModal} showModal={showModal} />
          </div>
        </div>
        <div className="zero:col-span-2 lg:col-span-1 row-span-1 col-span-1  zero:order-1 lg:order-2 flex justify-center lg:mx-4 mb-10">
          <LandingImage />
        </div>
      </div>

      <div className="flex lg:justify-between justify-center items-center w-5/6">
        <div className="lg:flex hidden">
          <SiCoderwall
            size={100}
            className="rotate-180 text-orange-400 dark:text-[#43cea2]"
          />
        </div>

        <div className="flex justify-center items-center lg:w-1/2 w-5/6">
          <div className="flex flex-col">
            <div className="flex justify-center items-center flex-col">
              <LandingIntroTextBlock />
            </div>
            <div className="flex justify-center items-center">
              <Link
                to={"technologies-section"}
                smooth
                offset={scrollPosition === 0 ? 0 : -110}
                className={classNames(
                  inView ? "opacity-100" : "opacity-0",
                  "transition duration-500 delay-500 ease-in-out mt-8 hover:cursor-pointer w-fit"
                )}
              >
                <BiDownArrowAlt size={60} className="animate-bounce" />
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <SiCoderwall
            size={100}
            className="text-orange-400 dark:text-[#43cea2]"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
