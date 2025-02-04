// TODO: HANDLE ON CLICK IT ROTATE ON Y ONLY

import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Robot from "../components/Robots";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";

import {
  mediumWidthScreen,
  extraWidthScreen,
  smallWidthScreen,
} from "../constants";
import { useMediaQuery } from "../hooks/useMediaQuery";
import RobotsCamera from "../components/RobotsCamera";

export default function Hero() {
  const isWindowMobile = useMediaQuery({ maxWidth: 768 });
  const isWindowTablet = useMediaQuery({ maxWidth: 1024, minWidth: 768 });

  const modelGeometry = isWindowMobile
    ? smallWidthScreen
    : isWindowTablet
    ? mediumWidthScreen
    : extraWidthScreen;

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="md:pt-12 w-full md:items-start sm:mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-2xl font-medium text-white text-center md:text-left font-generalsans">
          <p className="text3xl">
            Hello, My Name is Fernando <span className="waving-hand">👋</span>
          </p>
          <p className="md:text-left hero_tag  max-w-xl">
            I Do{" "}
            <span className="highlight highlight-variant-12 after:bg-gradient-to-tr after:from-amber-500 after:to-sky-500">
              Software
            </span>
            <span className=" highlight highlight-variant-1 after:bg-gradient-to-tr after:from-red-600 after:to-black-100">
              Machine Learning
            </span>
            and{" "}
            <span className="highlight highlight-variant-15 after:bg-gradient-to-tr after:from-green-600 after:to-blue-500-100">
              Network
            </span>
          </p>
        </p>

        <div className="w-full h-full absolute inset-0">
          <Canvas className="w-full h-full">
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <Suspense fallback={<CanvasLoader />}>
              <RobotsCamera isMobile={isWindowMobile} >
                <Robot
                  scale={modelGeometry.scale}
                  position={modelGeometry.position}
                  rotation={modelGeometry.rotation}
                />
              </RobotsCamera>
              <ambientLight intensity={1.2} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
}
