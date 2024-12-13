import React from "react";

interface BigHeadingProps {
  label: string;
}

const BigHeading: React.FC<BigHeadingProps> = ({ label }) => {
  return (
    <div className="">
      <p className="capitalize font-bold text-blue-900 text-6xl">{label}</p>
    </div>
  );
};

export default BigHeading;
