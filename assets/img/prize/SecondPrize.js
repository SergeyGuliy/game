import React from "react";

import Image from "next/image";
import img from "./30.png";

const SecondPrize = ({ className }) => {
  return (
    <div className={className}>
      <Image src={img} />
    </div>
  );
};

export default SecondPrize;
