"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const ScrollingAnimationWithGsap = () => {
  const boxRefWithScroll = useRef(null);

  useEffect(() => {
    // ye conditon is liai use hogi kabhi gsap use krna tricky hojata hai
    if (typeof window !== undefined) {
      gsap.fromTo(boxRef.current, {
        rotation: 360,
        duration: 2,
        repeat: -1,
        ease: "power1.inOut",
      });
    }
  }, []);
  return {
    boxRefWithScroll,
  };
};

export default ScrollingAnimationWithGsap;
