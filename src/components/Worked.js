import React, { useEffect, useRef } from "react";
import "../App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkedComponent from "./WorkedComponent";

gsap.registerPlugin(ScrollTrigger);

function Worked({ setExpRef, preview = false, data }) {
  const mainRef = useRef(null);

  useEffect(() => {
    setExpRef(mainRef);
  }, []);

  return (
    <WorkedComponent data={data}/>
    
  );
}

export default Worked;
