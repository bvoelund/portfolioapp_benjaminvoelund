import classNames from "classnames";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsPersonLinesFill } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GiGearStickPattern } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import {
  AiOutlineCloseCircle,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { Link } from "react-scroll";

type SideBarProps = {
  show: boolean;
  toggleShow: (state: boolean) => void;
};

const SideBar = ({ show, toggleShow }: SideBarProps) => {
  const controls = useAnimation();

  useEffect(() => {
    if (show) controls.start("visible");
    else controls.start("hidden");
  }, [controls]);

  const links = [
    {
      name: "Technologies",
      to: "technologies-section",
      id: 1,
      icon: <GiGearStickPattern size={36} />,
    },
    {
      name: "Experience",
      to: "experience-section",
      id: 2,
      icon: <MdWorkOutline size={36} />,
    },
    {
      name: "Home",
      to: "personal-section",
      id: 3,
      icon: <BsPersonLinesFill size={36} />,
    },
    {
      name: "My projects",
      to: "mywork-section",
      id: 4,
      icon: <AiOutlineFundProjectionScreen size={36} />,
    },
  ];

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.aside
          initial={{ x: 600 }}
          animate={{
            transition: { duration: 0.7 },
            x: 0,
          }}
          exit={{
            x: 2000,
            transition: { delay: 0.7, duration: 0.7 },
          }}
          className={classNames(
            "w-full z-50 fixed right-0  h-screen dark:bg-[#0d1321] bg-white flex justify-center items-center"
          )}
        >
          <motion.div
            className="flex-col"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
            {links.map(({ name, to, id, icon }) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.1 }}
                variants={itemVariants}
                className={"block text-4xl cursor-pointer  w-fit mb-12"}
              >
                <Link
                  to={to}
                  smooth
                  offset={-80}
                  className="flex items-center hover:scale-110 transition ease-out duration-300 "
                  onClick={() => toggleShow(false)}
                >
                  {icon}
                  <p className="pl-5 inline-block">{name}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
