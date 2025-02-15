import TechIcon from "../../components/TechIcon";
import { TECH_STACK_LIST } from "../../constants";
import { duplicateArr } from "../../utils/utilityFunction";

function Skills() {


  const skills = duplicateArr(TECH_STACK_LIST, 2)

  return (
    <section className="c-space my-20">
      <p className="text-center">Skillset</p>
      <p className="my-2 text-base italic text-center text-slate-500">
      </p>
      <div className="group flex relative overflow-hidden whitespace-nowrap  py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        {[1, 2].map((_,index) => (
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
    </section>
  );
}

export default Skills;
