import React from 'react'
import "./Work.css"
import Amazon from "../../img/amazon.png"


const Works = () => {
  return (
    <div className="works">
        <div className="awesome">
            <span>Worked for </span>
            <span>Brands & Clients</span>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Repudiandae maiores tempora molestiae explicabo 
                  sit reprehenderit ut impedit, eveniet <br />nesciunt 
                  doloremque dolore inventore ratione beatae vel 
                  quae ducimus quaerat reiciendis ipsam?</span>
               <button className="btn side-btn">Hire ME</button>  
            <div className="blur side-blur" style={{background:'#abf1ff94'}}></div>

          </div>
    </div>
  )
}

export default Works