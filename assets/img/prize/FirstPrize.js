import React from "react";

import Image from "next/image";
import img from "./20.png";

const FirstPrize = ({ className }) => {
  return (
    <div className={className}>
      <Image src={img} />
    </div>
  );
};

export default FirstPrize;
