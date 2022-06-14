import React from "react";

type SectionHeaderProps = {
  title: string;
  description?: string | React.ReactNode;
};

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <>
      <h2 className="xl:text-4xl text-3xl font-semibold pb-8 tracking-wide mt-10">
        {title}
      </h2>
      {description}
    </>
  );
};

export default SectionHeader;
