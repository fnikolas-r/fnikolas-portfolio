import { useState } from "react";
import { Tooltip } from "react-tooltip";
import StackIcon from "tech-stack-icons";
import { ITechStack } from "../constants";
import 'react-tooltip/dist/react-tooltip.css'


function TechIcon({ isSourceFromInternet, name, source }: ITechStack) {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const id = self.crypto.randomUUID();

  return (
    <div className="text-sm">
      <div
        className="w-14 "
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
        data-tooltip-id={id}
        data-tooltip-content={name}
        data-tooltip-place="top"
      >
        {isSourceFromInternet ? (
          <img
            src={source}
            alt={name}
            className="hover:filter-none filter grayscale "
          />
        ) : (
          <p>
            <StackIcon name={source} grayscale={!isMouseEnter} />
          </p>
        )}
      </div>
      <Tooltip id={id} className="text-sm" />
    </div>
  );
}

export default TechIcon;
