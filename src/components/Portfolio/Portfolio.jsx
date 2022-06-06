import React from 'react'
import "./Portfolio.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import IP1 from "../../img/ip1.png"
import Ghidra from "../../img/ghidra.png"
import IP2 from "../../img/Ip2.png"


const Portfolio = () => {
  return (
    <div className="portfolio">
        <span>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={IP1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IP2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ghidra} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
      </Swiper>

    </div>
  )
}

export default Portfolio