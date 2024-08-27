import React from "react";
import HEading from "./HEading";
import ProductCard from "./ProductCard";
import img1 from "../../assets/product/p-1.jpg";
import img2 from "../../assets/product/p-2.jpg";
import img3 from "../../assets/product/p-3.jpg";
import img4 from "../../assets/product/p-4.jpg";
import img5 from "../../assets/product/p-5.jpg";
import img6 from "../../assets/product/p-7.jpg";
import img7 from "../../assets/product/p-7.jpg";
import img8 from "../../assets/product/p-9.jpg";
const ProductData = [
  {
    id: 1,
    title: "ATECH Headphone",
    price: "1000",
    image: img1,
    aosDelay: "0",
  },
  {
    id: 2,
    title: "Boat",
    price: "2000",
    image: img2,
    aosDelay: "200",
  },
  {
    id: 3,
    title: "Rocky Mountain",
    price: "1500",
    image: img3,
    aosDelay: "300",
  },
  {
    id: 4,
    title: "ATECH ",
    price: "1700",
    image: img4,
    aosDelay: "400",
  },
  {
    id: 5,
    title: "Razer",
    price: "1900",
    image: img5,
    aosDelay: "500",
  },
  {
    id: 6,
    title: "Philips",
    price: "1400",
    image: img6,
    aosDelay: "600",
  },
  {
    id: 7,
    title: "Logitech",
    price: "3000",
    image: img7,
    aosDelay: "700",
  },
  {
    id: 8,
    title: "HyperX",
    price: "5000",
    image: img8,
    aosDelay: "800",
  },
];
const Product = () => (
  <div>
    <div className="container mt-1">
      {/* HeaderSection */}
      <HEading title={"Our Products"} subtitle={"Explore Our Products"} />

      {/* Body Section  */}
      <ProductCard data={ProductData} />
    </div>
  </div>
);

export default Product;
