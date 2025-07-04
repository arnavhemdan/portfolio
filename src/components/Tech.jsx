import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="max-auto">
      <div className="text-3xl font-bold">
        My tech stack
      </div>
<div className='flex flex-row flex-wrap justify-center gap-10'>
  {technologies.map((technology) => (
    <div className='w-28 h-28 flex flex-col items-center' key={technology.name}>
      <BallCanvas icon={technology.icon} />
      <p className="text-xs text-center mt-2">{technology.name}</p>
    </div>
  ))}
</div>

    </div>
  );
};

export default SectionWrapper(Tech, "");
