import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Category from "./Components/Category/Category";
import Category2 from "./Components/Category/Category2";
import Services from "./Components/Services/Services";
import Banner from "./Components/Banner/Banner";
import headphone from "./assets/hero/headphone.png";
import Products from "./Components/Products/Product";
import Blog from "./Components/Blog/Blog";
import Partners from "./Components/Partners/Partners";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import Footer from "./Components/Footer/Footer";
import Popup from "./Components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const BannerData = {
  discount: "30% OFF",
  title: "FINE SMILE",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta vero ex illo atque ratione quasi rerum esse placeat labore earum!",
  bgColor: "#f42c37",
};
const BannerData2 = {
  discount: "30% OFF",
  title: "Happy hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta vero ex illo atque ratione quasi rerum esse placeat labore earum!",
  bgColor: "#2dcc6f",
};

function App() {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App app-bg-color">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />

      <Products />
      <Banner data={BannerData2} />
      <Blog />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
}

export default App;
