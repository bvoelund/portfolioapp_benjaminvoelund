import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

type DarkModeTogglerProps = {
  toggle: () => void;
  darkmodeEnabled: boolean;
};

const DarkModeToggler = ({ toggle, darkmodeEnabled }: DarkModeTogglerProps) => {
  return (
    <span
      onClick={toggle}
      className="rounded-full flex justify-center items-center p-2 m-2 z-20 cursor-pointer border-none shadow-md shadow-yellow-500 dark:shadow-white"
    >
      {darkmodeEnabled ? (
        <FaMoon size={18} className="text-white" />
      ) : (
        <FaSun size={18} className="text-orange-300" />
      )}
    </span>
  );
};

export default DarkModeToggler;
