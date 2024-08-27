import React from "react";
import Button from "../Shared/Button";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* Card section */}
        {data.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="group relative"
            key={data.id}
          >
            <div className="relative space-y-3">
              {/* Image */}
              <img
                src={data.image}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-md"
              />

              {/* Overlay with blur effect */}
              <div
                className="absolute inset-0 bg-transparent 
                group-hover:backdrop-blur-sm flex items-center justify-center duration-200"
              >
                {/* Hover button */}
                <div className="hidden group-hover:flex">
                  <Button
                    text={"Add to cart"}
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </div>
              </div>
            </div>

            {/* Product details */}
            <div className="leading-7">
              <h2 className="font-semibold">{data.title}</h2>
              <h2 className="font-bold">{data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
