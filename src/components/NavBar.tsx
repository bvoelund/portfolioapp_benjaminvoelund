import classNames from "classnames";
import DarkModeToggler from "./minor/DarkModeToggler";
import { MdWorkOutline } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GiGearStickPattern, GiGraduateCap } from "react-icons/gi";
import { Link } from "react-scroll";
import NavBarIcon from "./minor/NavBarIcon";
import { useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

type NavBarProps = {
  darkModeEnabled: boolean;
  toggleTheme: () => void;
  toggleSideBar: boolean;
  setToggleSideBar: (state: boolean) => void;
};

const NavBar = ({
  darkModeEnabled,
  toggleTheme,
  toggleSideBar,
  setToggleSideBar,
}: NavBarProps) => {
  return (
    <nav className="w-screen z-50 sticky shadow-lg top-0 flex flex-col md:flex-row dark:bg-[#111827] bg-gray-100">
      <div
        className={
          "py-2 flex items-center justify-between opacity-100 w-full dark:border-none transition ease-in-out duration-100"
        }
      >
        <h1 className="text-lg md:text-xl lg:text-3xl border-r-4 border-orange-300 dark:border-sky-300 md:pl-5 zero:pl-2 pr-4 font-semibold md:font-medium">
          Benjamin Vølund
        </h1>
        <div className="lg:flex hidden items-center md:space-x-6 lg:space-x-12">
          <NavBarIcon
            sectionRef="technologies-section"
            icon={<GiGearStickPattern size={24} />}
            text={"Technologies"}
          />
          <NavBarIcon
            sectionRef="experience-section"
            icon={<MdWorkOutline size={24} />}
            text={"Experience"}
          />
          <NavBarIcon
            sectionRef="personal-section"
            icon={<BsPersonLinesFill size={24} />}
            text={"About me"}
          />
          <NavBarIcon
            sectionRef="mywork-section"
            icon={<AiOutlineFundProjectionScreen size={24} />}
            text={"My Projects"}
          />
        </div>

        <div className=" pr-5 flex justify-center items-center">
          <div className="lg:hidden mr-5 cursor-pointer dark:hover:bg-slate-800 rounded-full p-4">
            <HiOutlineMenuAlt3
              size={24}
              onClick={() => setToggleSideBar(!toggleSideBar)}
            />
          </div>
          <DarkModeToggler
            darkmodeEnabled={darkModeEnabled}
            toggle={toggleTheme}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
