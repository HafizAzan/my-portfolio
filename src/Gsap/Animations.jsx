"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const AnimationWithGsap = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      gsap.to(boxRef.current, {
        borderWidth: "10px",
        rotate: 360,
        duration: 5,
        repeat: -1,
        ease: "linear",
        boxShadow: "2px 2px 30px #fff",
        transformOrigin: "center",
      });
    }
  }, []);
  return {
    boxRef,
  };
};

export default AnimationWithGsap;
