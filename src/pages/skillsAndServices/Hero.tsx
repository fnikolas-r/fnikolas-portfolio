// TODO: HANDLE ON CLICK IT ROTATE ON Y ONLY

import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "../../components/CanvasLoader";

import { useMediaQuery } from "react-responsive";
import OldComputer from "../../components/OldComputer";
import { SERVICES_LIST } from "../../constants";

type IModalHandler = [() => void, React.Dispatch<React.SetStateAction<React.ReactNode>>];

function ServicesModal(){
  return <div>
    <h1 className="text-8xl font-bold font-generalsans">I Can</h1>
    <div className="mt-5 flex gap-3 flex-wrap ">
      {SERVICES_LIST.map((val)=><p className="text-xl font-raleway-general font-bold uppercase">{val} · </p>)}
    </div>
  </div>
}

export default function Hero({ modalHandler }: { modalHandler: IModalHandler }) {
  const isWindowMobile = useMediaQuery({ maxWidth: 768 });
  const [openModal, setModalChildren] = modalHandler


  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="md:pt-16 w-full md:items-start sm:mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <div className="font-medium text-white text-center md:text-left font-generalsans ">
          <p className="hero_tag text-5xl text-center mt-20">
            What I Can Do
          </p>
          <div className="">
              <button className="flex items-center justify-center cursor-pointer p-3 rounded-md bg-black-300 text-white mx-auto" onClick={() => {
                setModalChildren(<ServicesModal/>)
                openModal()
              }

              }>Here is List of Services That I Provide</button>

          </div>
        </div>
        <div className="w-full h-full absolute inset-0 -z-[100] filter hue-rotate-[200deg]">
          <Canvas className="w-full h-full ">
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <ambientLight intensity={2} />


            <Suspense fallback={<CanvasLoader />}>
              <OldComputer
                scale={14.2}
                position={[isWindowMobile ? 3 : 9.6, -2.8, 6]}
                rotation={[0.4, 0.4, 0]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section >
  );
}
