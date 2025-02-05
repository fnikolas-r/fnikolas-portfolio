import React, { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";
import { techStacks } from "../constants/faker";
import { duplicateArr } from "../utils/utilityFunction";
import TechIcon from "../components/TechIcon";

function Skills() {
  const FAST_DURATION = 20;
  const SLOW_DURATION = 75;

  const itemRepeat = 8;
  const data = duplicateArr(techStacks, itemRepeat);

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  const xTranslation = useMotionValue(0);
  let [ref, { width }] = useMeasure();

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls.stop;
  }, [xTranslation, width, duration, rerender]);

  return (
    <section className="c-space my-20">
      <p className="text-center">Skillset</p>
      <p className="my-2 text-base italic text-center text-slate-500">
        Here Are Some Skills
      </p>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-4 min-w-max"
          ref={ref}
          style={{
            x: xTranslation,
            overflow:"hidden"
          }}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {data.map((tech) => (
            <TechIcon
              key={tech.id}
              name={tech.name}
              source={tech.source}
              isSourceFromInternet={tech.isSourceFromInternet}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
