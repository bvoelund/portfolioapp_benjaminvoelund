import React from "react";

type TechnologyCircleType = {
  icon: React.ReactNode;
};

const TechnologyCircle = ({ icon }: TechnologyCircleType) => {
  return (
    <div className="hover:animate-spin w-fit flex justify-center items-center transition duration-300 ease-in-out shadow-xl rounded-full bg-gradient-to-r p-1 dark:from-[#43cea2] dark:to-[#185a9d] from-[#ff7e5f] to-[#feb47b]">
      <div className=" dark:bg-[#0d1321] bg-white rounded-full h-full w-full p-2">
        {icon}
      </div>
    </div>
  );
};

export default TechnologyCircle;
