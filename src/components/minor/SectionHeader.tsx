import React from "react";

type SectionHeaderProps = {
  title: string;
  description?: string | React.ReactNode;
};

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <>
      <h2 className="xl:text-5xl text-2xl font-semibold italic pb-8 tracking-wide">
        {title}
      </h2>
      {description}
    </>
  );
};

export default SectionHeader;
