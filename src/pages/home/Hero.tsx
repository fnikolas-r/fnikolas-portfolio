// TODO: HANDLE ON CLICK IT ROTATE ON Y ONLY

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../../components/CanvasLoader";
import Robot from "../../components/Robots";

import { useMediaQuery } from "react-responsive";
import RobotsCamera from "../../components/RobotsCamera";
import {
  extraWidthScreen,
  LOCALES_TEXT,
  mediumWidthScreen,
  PERSONAL_INFO,
  smallWidthScreen,
} from "../../constants";
import { ContactBox } from "../../components/SocialComponent";

export default function Hero() {
  const isWindowMobile = useMediaQuery({ maxWidth: 768 });
  const isWindowTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isWindowLarge = useMediaQuery({ minWidth: 1024 });

  const modelGeometry = isWindowLarge
    ? extraWidthScreen
    : isWindowTablet
      ? mediumWidthScreen
      : smallWidthScreen;

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="md:pt-16 w-full md:items-start sm:mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <div className="text-2xl font-medium text-white text-center md:text-left font-generalsans">
          <p className="text-base md:text-xl">
            Hello, My Name is Fernando <span className="waving-hand">👋</span>
          </p>
          <p className="md:text-left hero_tag md:max-w-xl">
            I Build{" "}
            <span className="highlight highlight-variant-12 after:bg-gradient-to-tr after:from-amber-500 after:to-sky-500">
              Products
            </span>
            &nbsp;and Design&nbsp;
            <span className="highlight highlight-variant-15 after:bg-gradient-to-tr after:from-green-600 after:to-blue-500-100">
              Infrastructure
            </span>
          </p>
          <div className="hidden md:flex items-start">
            <a href="https://short.fnikolabs.com/resume" target="_blank" className="text-sm">
              <button className="flex gap-4 items-center justify-center cursor-pointer p-3 rounded-md bg-black-300  transition-all active:scale-95 text-white mx-auto">{LOCALES_TEXT.hereIsMyCV}</button>
            </a>
          </div>
          <div className="w-full flex">
            {PERSONAL_INFO.SOCIALS.map((item, index) => (
              <ContactBox
                key={index}
                icon={item.icon}
                href={item.href}
                name={item.name} />
            ))}
          </div>
        </div>

        <div className="w-full h-full absolute inset-0 -z-[1000]">
          <Canvas className="w-full h-full">
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <Suspense fallback={<CanvasLoader />}>
              <RobotsCamera isMobile={isWindowMobile}>
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
