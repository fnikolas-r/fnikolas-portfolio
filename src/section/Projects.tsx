import { faArrowUp, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import React, { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import ProjectDisplay from "../components/ProjectDisplay";

function Projects() {
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
    <section className="c-space my-20">
      <p className="head-text">My Project</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-3 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          {/* Spotlight Atas */}
          <div className="absolute top-0 right-0">
            <img
              src="/image/bgSpotlight.png"
              alt=""
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold projectText">
              %%JUDUL PROYEK%%
            </p>
            <p className="projectText text-base">
              Podcastr is a revolutionary Software-as-a-Service platform that
              transforms the way podcasts are created. With advanced AI-powered
              features like text-to-multiple-voices functionality, it allows
              creators to generate diverse voiceovers from a single text input.
            </p>
          </div>

          {/* Tech Stack List */}
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {["Node", "NPM"].map((tag, index) => (
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
              <p>Check My Project</p>
              <FontAwesomeIcon icon={faGlobe} className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn">
              <img src="/image/left-arrow.png" alt="left arrow" />
            </button>

            <button className="arrow-btn">
              <img
                src="/image/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                  <ProjectDisplay scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}/>
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
