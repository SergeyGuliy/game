import React from "react";

import Image from "next/image";
import img from "./3.png";

const ThirdPrize = ({ className }) => {
  return (
    <div className={className}>
      <Image src={img} />
    </div>
  );
};

export default ThirdPrize;
