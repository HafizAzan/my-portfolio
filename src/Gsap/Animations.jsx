"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const AnimationWithGsap = () => {
  const boxRef = useRef(null);
  const wave = useRef(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      gsap.to(boxRef.current, {
        rotate: 360,
        duration: 5,
        repeat: -1,
        ease: "linear",
        transformOrigin: "center",
      });
      gsap.to(wave.current, {
        scale: 1.2,
        opacity: 0.7,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
      });
    }
  }, []);

  return {
    boxRef,
    wave,
  };
};

export default AnimationWithGsap;

export const animateWaves = (refs) => {
  refs.forEach((wave, index) => {
    gsap.to(wave, {
      scale: 0.9,
      opacity: 0,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      delay: index * 1,
      yoyo: true,
    });
  });
};
