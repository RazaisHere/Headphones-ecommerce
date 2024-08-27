import React from "react";
import {
  FaMobileAlt,
  FaLocationArrow,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950 bg-gray-100">
      {/* Corrected dark:bg-gra-950 to dark:bg-gray-950 */}
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 pb-20 pt-5 gap-4">
          {/* Company Info Section */}
          <div className="py-8 px-4">
            <a
              href="/"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              EShop
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              perferendis expedita atque reprehenderit inventore placeat tenetur
              maiores eius laborum at.
            </p>
            <p className="text-gray-500 mt-4">Made by Raza</p>
            <a
              href="https://razaishere.github.io/portfolio-mine/"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              Visit my Portfolio
            </a>
          </div>

          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* Important Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-primary transition duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="py-8 px-4">
              <h1
                style={{ letterSpacing: "1px" }}
                className="text-xl font-bold sm:text-left mb-3 -ml-1"
              >
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-primary transition duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>R.W.P</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+923035526036</p>
                </div>
                <div className="flex items-center space-x-3 mt-12">
                  <a href="https://www.facebook.com/">
                    <FaFacebook className="text-3xl hover:text-brandBlue  transform  transition duration-300" />
                  </a>
                  <a href="https://www.instagram.com/alinotraza/?hl=en">
                    <FaInstagram className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="https://www.linkedin.com/in/ali-raza-9970412bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <FaLinkedin className="text-3xl hover:text-brandBlue duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
