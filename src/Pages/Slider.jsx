import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

import img1 from "../assets/slider/1.jpg";
import img2 from "../assets/slider/2.jpg";
import img3 from "../assets/slider/3.jpg";
import img4 from "../assets/slider/4.jpg";
import img5 from "../assets/slider/5.jpg";
import img6 from "../assets/slider/6.jpg";
import img7 from "../assets/slider/7.jpg";
import img8 from "../assets/slider/8.jpg";
import img9 from "../assets/slider/9.jpg";
import img10 from "../assets/slider/10.jpg";
import { Typography } from "@mui/material";

export default function Slider() {
    return (
        <>
            <Typography fontFamily="cursive" align="center" sx={{ margin: "40px 0", fontWeight: "600", fontSize: { lg: "50px", ms: "40px", xs: "35px" } }}>Don't <span style={{ color: "#FF2625" }}>DREAM</span> for it,<span style={{ color: "#FF2625" }}>TRAIN</span> for it...</Typography>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img10} alt="gym-poster-10" /></SwiperSlide>
                <SwiperSlide><img src={img1} alt="gym-poster-1" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="gym-poster-2" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="gym-poster-3" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="gym-poster-4" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="gym-poster-5" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="gym-poster-6" /></SwiperSlide>
                <SwiperSlide><img src={img7} alt="gym-poster-7" /></SwiperSlide>
                <SwiperSlide><img src={img8} alt="gym-poster-8" /></SwiperSlide>
                <SwiperSlide><img src={img9} alt="gym-poster-9" /></SwiperSlide>


            </Swiper>
        </>
    );
}
