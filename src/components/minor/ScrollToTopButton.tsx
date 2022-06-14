import classNames from "classnames";
import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

type ScrollToTopButtonProps = { scrollPosition: number };

const ScrollToTopButton = ({ scrollPosition }: ScrollToTopButtonProps) => {
  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={classNames(
        scrollPosition !== 0 ? "opacity-100" : "opacity-0 cursor-default",
        "z-50 fixed bottom-0 right-0 md:w-12 md:h-12 h-9 w-9 flex justify-center items-center dark:bg-white bg-[#111827] rounded-full m-5 transition duration-200 ease-in-out cursor-pointer hover:scale-125"
      )}
    >
      <AiOutlineArrowUp className="w-3/6 h-3/6 dark:text-[#111827] text-white " />
    </div>
  );
};

export default ScrollToTopButton;
