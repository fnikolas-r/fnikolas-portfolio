// TODO: HANDLE ON CLICK IT ROTATE ON Y ONLY

import {  PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../../components/CanvasLoader";

import { useMediaQuery } from "react-responsive";
import OldComputer from "../../components/OldComputer";


export default function Hero() {
  const isWindowMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="md:pt-16 w-full md:items-start sm:mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <div className="font-medium text-white text-center md:text-left font-generalsans ">
          <p className="hero_tag text-5xl text-center mt-20">
            Here Lies My projects
          </p>
        </div>
        <div className="w-full h-full absolute inset-0 -z-[100] filter grayscale">
          <Canvas className="w-full h-full">
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <ambientLight intensity={2} />
            

            <Suspense fallback={<CanvasLoader />}>
              <OldComputer
                scale={14.2}
                position={[isWindowMobile? 3 :9.6, -2.8, 6]}
                rotation={[0.4, 0.4, 0]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
}
