import React from 'react'
import "./Intro.css"
import  Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Crown from "../../img/crown.png";
import Alvo from "../../img/unnamed.png";
import FloatingDiv from '../FloatingDiv/Floating'
import Glasses from '../../img/glasses.png'
import Glassesimj from '../../img/glassesimoji.png'

const Intro = () => {
  return (
      <div className="intro">
          <div className="introLeft">
              <div className="name">
                  <span>Hi I am</span>
                  <span>Alvin Ndung'u</span>
                  <span>Lorem ipsum dolor sit amet 
                      consectetur adipisicing elit. 
                      Vel, quas nisi ipsam eos distinctio 
                      ex ab dolor similique fugit laborum 
                      odio incidunt dolores quae alias quam, 
                      cumque mollitia commodi totam!</span>

              </div>
              <button className="hire">Hire Me</button>
              <div className="icons">
              <a href="https://github.com/alvo254"><img src={Github} alt="" /></a>
              <a href="https://www.instagram.com/_khamron_._"><img src={Instagram} alt="" /></a>
              <a href="https://www.linkedin.com/in/alvin-ndungu"><img src={LinkedIn} alt="" /></a>

              </div>
          </div>
          <div className="introRight">
              <img src={Vector} alt="" />
              <img src={Vector2} alt="" />
              <img src={Alvo} alt="" />
              <img src={Glassesimj} alt="" />
          <div style={{top:'-4%', left:'68%'}}>
              <FloatingDiv image={Crown} txt1="Software" txt2="Developer"/>
          </div>
          <div style={{top:'33rem'}}>
              <FloatingDiv image={Glasses} txt1="Python" txt2="Rust"/>
          </div>
          {/* blur divin */}
          <div className="blur" style={{background:'rgb(238 210 255)'}}>
          </div>
          <div className="blur" style={{background: '#c1f5ff', top:'17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
          </div>
      </div>
  )
};

export default Intro