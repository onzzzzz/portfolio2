"use client"
import Hero from "./hero/page";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Image from "next/image";
import star from "@/app/assets/star.svg"
import { useRef } from "react";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollToPlugin,TextPlugin);


export default function Home() {

  const container = useRef();


  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          pin: true,
          trigger: "#star",
          start: "top top",
          endTrigger: ".end",
          end: "bottom 50%+=100px",
        },
      });

        tl.to("#star", { rotateZ: 100});
    },
    { scope: container }
); 
  
  



  return (
    <main >
      <div className="z-40 absolute container h-dvh  w-dvw star  " ref={container}>
        <Image src={star} alt="star" id="star" />
      </div>
      
      <Hero />
      <Tech />
      <Contact />
    </main>
  );
}
