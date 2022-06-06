import React from 'react'
import "./Service.css"
import Card from '../Card/Card';
import Heart from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Resume from "./resume.pdf"

const Services = () => {
  return (
      <div className="services">

          <div className="awesome">
              <span>My Awesome</span>
              <span>Services</span>
              <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Repudiandae maiores tempora molestiae explicabo 
                  sit reprehenderit ut impedit, eveniet <br />nesciunt 
                  doloremque dolore inventore ratione beatae vel 
                  quae ducimus quaerat reiciendis ipsam?</span>
               <a href={Resume} download><button className="btn side-btn">Download CV</button></a>   
              <div className="blur side-blur" style={{background:'#abf1ff94'}}></div>

          </div>
          <div className="cards">
              <div style={{left:'24rem'}}>
                  <Card emoji = {Heart} 
                  heading = {'Backend'}
                  detail = {'Python, Database, Rust, C++'}
                  />
              </div>
              <div style={{top:'15rem',letf:'-4rem'}}>
                  < Card emoji={Glasses}
                  heading = {'Developer'}
                  detail = {'C++, Python, Rust, SQL'}
                  />
              </div>
              <div style={{bottom:'29rem',left:'24rem'}}>
                  < Card emoji={Humble}
                  heading = {'Developer'}
                  detail = {'C++, Python, Rust, SQL'}
                  />
              </div>
              <div className="blur blur2" style={{background:'rgb(245, 168, 245)'}}></div>

          </div>
      </div>
  )
}

export default Services