import { useRef } from "react";
import TechIcon from "../../components/TechIcon";
import { TECH_STACK_LIST } from "../../constants";
import { alwaysScrollTop, duplicateArr } from "../../utils/utilityFunction";
import { Link } from "react-router";

function Skills() {

  const skillRef = useRef(null);
  const skills = duplicateArr(TECH_STACK_LIST, 2)

  return (
    <section className="c-space my-20">
      <div className="flex justify-between px-24 items-center">
        <p className="text-4xl ">I Can <span className="" ref={skillRef}></span></p>
        <div><img src="/image/profileNoBg.png" alt="" className="w-32" /></div>
      </div>
      <div>
        <p className="text-base italic text-center text-slate-500">
        </p>
        <div className="group flex relative overflow-hidden whitespace-nowrap py-5 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="animate-slide-left-infinite group-hover:animation-pause flex w-max space-x-3"
            >
              {
                skills.map((tech, index) => (
                  <TechIcon
                    key={index}
                    name={tech.name}
                    source={tech.source}
                    isSourceFromInternet={tech.isSourceFromInternet}
                  />
                ))
              }
            </div>
          ))}
        </div>
      </div>
      <Link to={"/skills-and-services"} className="hover:border  py-3 text-xl text-center flex items-center justify-center" onClick={alwaysScrollTop}> Click Here To See More About My Skill & Service&nbsp;<img src="/image/nyan.gif" alt="" className="w-20" /></Link>
    </section>
  );
}

export default Skills;
