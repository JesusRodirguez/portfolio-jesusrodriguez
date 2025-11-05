import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

const Carrucel = ({  ClassSection = "",Modules = [],Effect = "",
  Loop = false,AutoPlay = {},ClassSwiper = "",children}) => {
  return (
    <section className={ClassSection}>
      <Swiper
        modules={Modules}
        effect={Effect}
        loop={Loop}
        autoplay={AutoPlay}
        className={ClassSwiper}
      >
        {children}
      </Swiper>
    </section>
  );
};

export default Carrucel;
