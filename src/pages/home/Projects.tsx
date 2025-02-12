import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Suspense, useState } from "react";
import CanvasLoader from "../../components/CanvasLoader";
import ProjectDisplay from "../../components/ProjectDisplay";
import { PROJECT_LIST } from "../../constants";
import { Link, NavLink } from "react-router";
import { alwaysScrollTop } from "../../utils/utilityFunction";
import { ProjectModalItem } from "../../components/ProjectModalItem";

function Projects({modalHandler}:{modalHandler:Function[]}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openModal, setModalChildren] = modalHandler;



  const projects = PROJECT_LIST.map((val, index) => ({
    ...val,
    id: index,
    techstack: [...val.techstack.slice(0, 4), ...val.techstack.length > 4 ? ["..."] : []],
    desc: val.desc.length > 450 ? val.desc.slice(0, 450) + "..." : val.desc
  }))
  const currentProject = projects[currentIndex]

  const handleNavigation = (direction: string) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === projects.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const isLastIndex = (projects.length - 1) === currentIndex

  // const c = useControls("ProjectPC",{
  //     px:{value:0, min:-20, max:20},
  //     py:{value:0, min:-20, max:20},
  //     pz:{value:0, min:-20, max:20},
  //     rx:{value:0, min:-20, max:20},
  //     ry:{value:0, min:-20, max:20},
  //     rz:{value:0, min:-20, max:20},
  //     lx:{value:0, min:-20, max:20},
  //     ly:{value:0, min:-20, max:20},
  //     lz:{value:0, min:-20, max:20},
  //     scale : {value:1, min:0, max:20}
  // });
  return (
    <section className="c-space my-20" id="project">
      <p className="head-text">My Project</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-3 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          {/* Spotlight Atas */}
          <div className="absolute top-0 right-0 -z-[1000]">
            <img
              src="/image/bgSpotlight.png"
              alt=""
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold projectText">
              <span>{currentProject["title"]}</span>
            </p>
            <p className={`projectText ${isLastIndex ? "text-2xl font-arapey" : "text-base"} text-justify h-48 md:h-32 overflow-hidden`}>
              <span>{currentProject.desc}</span>
            </p>
          </div>

          {/* Tech Stack List */}
          <div className="flex flex-col items-start justify-between">
            <div className="flex items-center flex-wrap gap-3 w-full">
              {currentProject["techstack"].map((tag, index) => (
                <div key={index} className="text-xs bg-slate-800 p-1">
                  {tag}
                </div>
              ))}
            </div>
            <div className="mt-3 items-center gap-2 cursor-pointer text-white-600 text-base">
            {isLastIndex ? <NavLink to={currentProject.source as string} onClick={alwaysScrollTop}>Tap Below for more 🔍</NavLink> :
              <p onClick={()=>{
                setModalChildren(<ProjectModalItem project={PROJECT_LIST[currentIndex]}/>)
                openModal()
              }}>Click To See More</p>}
          </div>
            </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img src="/image/left-arrow.png" alt="left arrow" />
            </button>

            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img src="/image/right-arrow.png" alt="right arrow" />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-72 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <ProjectDisplay
                  scale={2}
                  position={[0, -3, 0]}
                  rotation={[0, -0.1, 0]}
                  currTxt={currentProject.image}
                />
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}

export default Projects;
