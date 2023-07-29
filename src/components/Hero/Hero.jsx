import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calory from "../../assets/calories.png";
import CountUp from 'react-countup';
import {motion} from 'framer-motion'

export const Hero = () => {
  const transition ={type:'spring', duration:3}
  const mobile =window.innerWidth<=768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="best-ad">
          <motion.div
          initial={{left: mobile ? '179px' : '230px'}}
          whileInView={{left:'8px'}}
          transition={{...transition,type:'tween'}}
          >
          </motion.div>
          <span>The Best Fitness Club in the town </span>
        </div>

        {/* hero-text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              With our personalized program, you will be guided to achieve your
              fitness goals and build a stronger body by following simple steps
              !
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figure">
          <div>
            <span>
            <CountUp end={140} start={100} duration={4} prefix='+' />
            </span>
            <span>Experts coaches</span>
          </div>
          <div>
            <span>
            <CountUp end={978} start={800} duration={4} prefix='+' />
            </span>
            <span>Members joined</span>
          </div>
          <div>
            <span><CountUp end={50} start={0} duration={4} prefix='+' /></span>
            <span>Programs</span>
          </div>
        </div>

        {/* hero btn */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join now</button>

        <motion.div
        initial={{ right:'-1rem'}}
        whileInView={{right:'4rem'}}
        transition={transition}
        className="heart-rate">
          <img src={Heart} />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero image */}
        <img src={hero_image} className="hero_image" />
        <motion.img 
        initial={{ right:'28rem'}}
        whileInView={{right:'23rem'}}
        transition={transition}
        src={hero_image_back} className="hero_image_back" />
        {/* calories */}
        <motion.div 
        initial={{ right:'40rem'}}
        whileInView={{right:'30rem'}}
        transition={transition}
        className="calorie">
          <img src={Calory} />
          <div>
            <span>Calories burned</span>
            <span>226 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
