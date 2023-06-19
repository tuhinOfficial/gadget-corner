import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import img1 from "../../../assets/banner/img1.jpg"
import img2 from "../../../assets/banner/img2.jpg"
const Banner = () => {
  return (
    <div>
      <Carousel autoplay={true} autoplayDelay={3000} loop={true} navigation={false}  className="h-96 overflow-hidden -z-10">
        <div className="relative h-full w-full ">
          <img
            src={img1}
            className="h-96 w-full object-cover"
          />
        </div>
        <div className="relative h-full w-full ">
          <img
            src={img2}
            className="h-96 w-full object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
