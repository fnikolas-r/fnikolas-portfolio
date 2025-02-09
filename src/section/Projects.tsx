import { faArrowUp, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import React, { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../components/CanvasLoader";
import ProjectDisplay from "../components/ProjectDisplay";
import { useQuery } from "@tanstack/react-query";
import { getMyHighlightProject } from "../services/apiServices";
import { API_URL } from "../constants";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const BASE_URI = import.meta.env.VITE_NOCODB_BASE_URI;

  const {
    isPending,
    isError,
    data: results,
    error,
  } = useQuery({
    queryKey: ["project"],
    queryFn: getMyHighlightProject,
    select: (d) => {
      const dee = d.list.filter((x) => x["Title"] != null);
      return {
        data: dee.map((d) => ({
          ...d,
          currTxt: BASE_URI + d.Image[0]["path"],
        })),
        count: dee.length,
      };
    },
  });
  console.log(results);
  const data = isPending || isError ? [] : results?.data;
  const projectCount = isPending || isError ? 0 : results?.count;
  let currentProject =
    isPending || isError
      ? {
          Title: "",
          Description: "",
          TechStack: [],
          currTxt: "/image/projects/test-image.png",
        }
      : data[currentIndex];

  const handleNavigation = (direction: string) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

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
              {isPending ? (
                <span>Loading...</span>
              ) : isError ? (
                <div>Error... {error.message}</div>
              ) : (
                <span>{currentProject["Title"]}</span>
              )}
            </p>
            <p className="projectText text-base h-28 overflow-hidden">
              {isPending ? (
                <span>Loading...</span>
              ) : isError ? (
                <div>Error... {error.message}</div>
              ) : (
                <span>{currentProject["Description"]}</span>
              )}
            </p>
          </div>

          {/* Tech Stack List */}
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center flex-wrap gap-3">
              {currentProject["TechStack"].map((tag, index) => (
                <div key={index} className="text-sm">
                  {tag}
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600 text-base"
              href={"#"}
              target="_blank"
              rel="noreferrer"
            >
              <p><a href={currentProject["source"]? currentProject["source"] : ""}>Check My Project</a></p>
              <FontAwesomeIcon icon={faGlobe} className="w-3 h-3" />
            </a>
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
                  currTxt={currentProject.currTxt}
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
