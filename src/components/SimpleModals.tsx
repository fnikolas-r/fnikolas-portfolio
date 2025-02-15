import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const clip_anim = {
  initial: {
    clipPath: "circle(0 at 0% 50%)",
    WebkitClipPath: "circle(0 at 0% 50%)",
  },
  enter: {
    clipPath: "circle(140% at 0 14%)",
    WebkitClipPath: "circle(140% at 0 14%)",
    transition: {
      duration: 1, // Adjust duration
      ease: "easeInOut", // Smooth easing
    },
  },
  exit: {
    clipPath: "circle(0 at 0% 50%)",
    WebkitClipPath: "circle(0 at 0% 50%)",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

function SimpleModals({ isOpen, onClose , children}: { isOpen: boolean, onClose: ()=>void, children: React.ReactNode}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && <motion.div
        variants={clip_anim}
        initial="initial"
        animate="enter"
        exit="exit"
        className={"w-[100vw] h-[100vh] bg-white-800 fixed left-0 z-[500] text-black-100 overflow-y-auto"}
      >
        <div className="max-w-6xl mx-auto pt-20 overflow-y-auto">
          <button className="py-3 px-4 fixed right-2 top-4 rounded-sm outline-slate-600 cursor-pointer hover:bg-black-300 hover:text-white-600 hover:outline-black-100" onClick={() => onClose()}>
            &times;
          </button>
          {children}
        </div>
      </motion.div>}
    </AnimatePresence>
  );
}

export default SimpleModals;
