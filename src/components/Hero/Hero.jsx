import React from 'react'
import Header from '../Header/Header'
import  "./Hero.css"
import hero_image from "../../assets/hero_image.png";
import  hero_image_back  from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion} from "framer-motion"
import CountUp from 'react-countup';

function Hero() {
  const transtion = {type : "spring" , duration : 3}
  const mobile = window.innerWidth <= 768 ? true : false
  return (
    <div className='hero' id='hero'>
      <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>
            <div className="the-best-ad">
              <motion.div
              initial={{left: mobile ? "160px  ": "238px"}}
              whileInView={{left:"8px"}}
              transition={{...transtion , type:"tween"}}                 
              >

              </motion.div>
              <span>the best fitness club in the town </span>
            </div>
            {/* hero title */}
            <div className="hero-text">
              <div>
                <span className='stroke-text'>Shapw </span><span>Your</span>
              </div>
              <div>
                <span>Ideal Body</span>
              </div>
              <div>
                <span>In Here Will help to Shape anb bulid your ideal body and live up your life to fullest </span>
              </div>
            </div>
            <div className="fugures">
              {/* figures */}
            
                <div>
                  <span>
                    
                    <CountUp
                    start={20}
                    end={140}
                    delay="1"
                    prefix="+"
                    >

                    </CountUp>
                  </span>
                  <span>Export Coachs</span>
                </div>
                <div>
                  <span> 
                  <CountUp
                    start={100}
                    end={978}
                    duration={2.75}
                    
                    prefix="+"
                    >

                    </CountUp></span>
                  <span>Members Programs</span>
                </div>
                <div>
                  <span>
                  <CountUp
                    start={0}
                    end={50}
                    delay="0"
                    prefix="+"
                    >

                    </CountUp></span>
                  <span>fitness Programs</span>
                </div>
             
            </div>
            <div className="hero-buttons">
              <button className="btn">Get Started</button>
              <button className="btn">learn More</button>
            </div>
        </div>
        <div className="right-h">
          <button className="btn">Join Now</button>
          <motion.div
          initial={{right: "-1rem"}}
          whileInView={{right:"4rem"}}
          transition={transtion}
          className="heart-rate"
          >
            <img src={heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm </span>
          </motion.div>
          {/* hero image */}
          <img src={hero_image} alt="" className="hero-img" />
          <motion.img
          initial={{right:"11rem"}}
          whileInView={{right:"28rem"}}
          transition={transtion}
          src={hero_image_back} alt="" className="hero-image-back" />
          <motion.div
          initial={{right:"37rem"}}
          whileInView={{right:"28rem"}}
          transition={transtion}
          className="calories">
            <img src={calories} alt="" />
            <div>
            <span>Calories</span>
            <span> 220 Kcal</span>
            </div>
          </motion.div>
        </div>
        </div>
  )
}

export default Hero