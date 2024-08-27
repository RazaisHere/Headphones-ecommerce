import React from "react";
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";
const Category = () => {
  return (
    <div className="py-8">
      <div className="container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first Colo  */}
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-offset="0"
            className="sm:col-span-2  py-10 pl-5 bg-gradient-to-br from-black/70  to-brandWhite/70 text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div className="relative z-40  top-[-20px]">
              <div className="mb-4 space-y-2 ">
                <p className="mb-[2px] tex-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Play Station
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className=" w-[250px] sm:w-[300px] absolute   -tranlsate-y-1/2 -right-0 -top-[-2rem]"
            />
          </div>
          {/* Second Colo  */}
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-offset="0"
            className="py-10 pl-5 bg-gradient-to-br bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div className="relative z-40 top-[-20px]">
              <div className="mb-4 space-y-2">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  VR
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-black"
                />
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="w-[300px] absolute top-14 -right-[-10px] sm:-right-[0] sm:top-[95px] md:top-12  lg:top-[137px] xl:top-[55px] lg:right-0"
            />
          </div>
          {/* third Colo  */}
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-offset="0"
            className=" py-10 pl-5 bg-gradient-to-br from-black/90  to-brandBlue/70 text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div className="relative z-40 top-[-20px]">
              <div className="space-y-2 mb-2">
                <p className=" text-white">Enjoy</p>
                <p className="text-2xl font-semibold ">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Speakers
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-black"
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[240px] absolute -right-[-10px] top-[90px] lg:top-[40px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
