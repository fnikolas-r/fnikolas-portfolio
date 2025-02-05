import React, { useState } from "react";
import StackIcon from "tech-stack-icons";
import { mySkillInterface } from "../constants/interfaces";

function TechIcon({ isSourceFromInternet, name, source }: mySkillInterface) {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  return (
    <div
      className="w-14 "
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
    >
      {isSourceFromInternet ? (
        <p>Internet</p>
      ) : (
        <p>
          <StackIcon name={source} grayscale={!isMouseEnter} />
        </p>
      )}
    </div>
  );
}

export default TechIcon;
