import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blog",
    link: "/#blog",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];
const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="rounded-b-2xl fixed top-0 left-0 w-full bg-white dark:bg-gray-900 dark:text-white z-50">
      <div className="py-4 ">
        <div className=" container flex  justify-between items-center  ">
          {/* logo and link section */}
          <div className="lg:flex justify-start items-center">
            <a
              href="/"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              EShop
            </a>
            {/* Menu item */}
            <div className="hidden lg:block ml-4 ">
              <ul className="flex items-center gap-4 ">
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white duration-200 border-b-2  border-transparent hover:border-primary py-2"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* DropDownb Menu  */}
                <li className="relative cursor-pointer group py-1">
                  <a
                    href="/"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white  py-2"
                  >
                    Quick Link
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300 " />
                    </span>
                  </a>
                  {/* Drop Down links  */}
                  <div className="absolute z-1000 hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <a
                            href={data.link}
                            className="block px-4 py-2 p-2 inline-block w-full rounded-md font-[400] hover:bg-primary/20 dark:hover:bg-gray-700"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar right section  */}
          <div className="flex justify-between items-center gap-4">
            {/* SearchBar Section */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary duration-200 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 " />
            </div>
            {/* order-button section  */}
            <button className="relative p-3" onClick={handleOrderPopup}>
              <FaCartShopping className="text-xl text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white duration-200 " />
              <div className="absolute w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-xs top-0 right-0">
                4
              </div>
            </button>
            {/* Darkmode section  */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
