import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

import { easing } from "maath";
import { Group } from "three/examples/jsm/libs/tween.module.js";

function RobotsCamera({
  children,
  isMobile,
}: {
  children: React.ReactNode;
  isMobile: boolean;
}) {
  const groupRef = useRef<Group>(null);

  useFrame((state,delta)=>{
    // easing.damp3(state.camera.position, [0,0,20],0.25, delta)
    
    if(!isMobile){
      easing.dampE(groupRef!.current.rotation, [state.pointer.y/20, -state.pointer.x/ 5, 0], 0.25, delta)
    }
  
  })

  return <group ref={groupRef}>{children}</group>;
}

export default RobotsCamera;
