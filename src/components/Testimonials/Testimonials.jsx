import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
import { motion} from "framer-motion"

function Testimonials() {
  const transtion = {type : "spring" , duration : 3}
  const [selected, setSelected] = useState(0);
  const Tlenght = testimonialsData.length;
  return (
    <div className="Testimonials" id="Testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What They </span>
        <span> Say About Us </span>
        <motion.span
         key={selected}
         initial={{opacity:0 , x:-100}}
         animate={{opacity:1, x  :0 }}
         exit={{opacity:0, x:100}}
         transition={transtion}
        >{testimonialsData[selected].review}</motion.span>
        <span style={{ color: "var(--orange)" }}>
          <span>{testimonialsData[selected].name}</span>
        </span>{" "}
        - {testimonialsData[selected].status}
      </div>
      <div className="right-t">
        <motion.div 
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{...transtion , duration : 2}}
        ></motion.div>
        <motion.div
         initial={{opacity: 0, x: 100}}
         whileInView={{opacity: 1, x: 0}}
         transition={{...transtion , duration : 2}}
         ></motion.div>
        <motion.img
        key={selected}
        initial={{opacity:0 , x:100}}
        animate={{opacity:1, x  :0 }}
        exit={{opacity:0, x:-100}}
        transition={transtion}
        src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
          onClick={()=>{
            selected === 0 
            ?setSelected(Tlenght -1 ) 
            :setSelected((prev) => prev - 1)
          }} 
          src={leftArrow} alt="" />
          <img
            onClick={()=>{
                selected === Tlenght - 1
                ?setSelected(0) 
                :setSelected((prev) => prev + 1)
              }}  src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
