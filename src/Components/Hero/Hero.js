import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../Shared/Button";
const HeroData = [
  {
    id: 1,
    title: "Wireless",
    title2: "Headphone",
    img: Image1,
    subtitle: "Beats Solo",
  },
  {
    id: 2,
    title: "Wireless",
    title2: "Virtual",
    img: Image2,
    subtitle: "Beats Solo",
  },
  {
    id: 3,
    title: "Branded",
    title2: "Laptops",
    img: Image3,
    subtitle: "Beats Solo",
  },
];
const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enables auto sliding
    autoplaySpeed: 2000,
  };
  return (
    <div className="container mt-[63px] sm:mt-0">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center ">
        <div className="container pb-8 sm:pb-0">
          {/* Hero Section  */}
          <Slider {...settings}>
            {HeroData.map((item) => (
              <div key={item.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* textContent Section  */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold "
                    >
                      {item.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {item.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"
                    >
                      {item.title2}
                    </h1>
                    <div
                      onClick={handleOrderPopup}
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="0"
                      data-os-delay="300"
                    >
                      <Button
                        text="Shop Now "
                        bgColor="bg-primary"
                        textColor="text-white"
                        handleOrderPopup={handleOrderPopup}
                      />
                    </div>
                  </div>
                  {/* Img Section  */}
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={item.img}
                        className="w-[300px] sm:w-[400px] h-[400px]  sm-h-[450px]  sm:scale-105 lg:scale-110 object-contain 
                        mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-20"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
