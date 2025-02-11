
import { EXPERIENCE_LIST, IExperience } from "../../constants";

const Experience = ({item}:{item:IExperience}) => {
  return (
    <div className="work-content_container group">
      <div className="flex flex-col h-full justify-start items-center py-2">
        <div className="work-content_logo">
          <img className="w-full h-full" src={item.logo} alt="" />
        </div>

        <div className="work-content_bar" />
      </div>

      <div className="sm:p-3 px-2.5 py-3">
        <p className="font-bold text-white-800">{item.title}</p>
        <p className="text-sm mb-3">
          {item.position} -- <span>{item.duration}</span>
        </p>
        <p className="group-hover:text-white transition-all ease-in-out duration-500">
          {item.desc}Lorem Ipsum
        </p>
      </div>
    </div>
  );
};

const EducationAndExperience = () => {


  const works = EXPERIENCE_LIST.filter(d=>d.type=="Work")
  const educations = EXPERIENCE_LIST.filter(d=>d.type=="Study")


  return (
    <section className="c-space my-20" id="experience">
      <div className="w-full text-white-600 text-base">
        <p className="head-text">Education & Experience</p>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-12">
          <div className="work-container">
            <div className="sm:py-10 py-3 sm:px-5 px-2.5">
              <div className="px-5 text-white text-2xl italic py-3">
                Education
              </div>

              {educations.map((item, index) => <Experience item={item} key={index}/>)}
              
            </div>
          </div>
          <div className="work-container">
            <div className="sm:py-10 py-3 sm:px-5 px-2.5">
              <div className="px-5 text-white text-2xl italic py-3">
                Experience
              </div>

              {
                works.map((item, index) => (
                  <Experience item={item} key={index} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndExperience;
