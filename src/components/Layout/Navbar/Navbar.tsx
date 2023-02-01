import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import "./Navbar.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuProfile from "./MenuProfile";
import { FaUserNurse} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
 

  const [showOption, setShowOption] = useState(false);
  const handleClick = () => {
    setShowOption(!showOption);
  };
  return (
    <div>
      <div className=" py-1 bg-green-400 w-full left-0 top-0 z-20  fixed">
        <div className="  flex justify-between items-center md:h-16 sm:h-16 h-14 lg:px-8 md:px-5 sm:px-5 px-5 blur-backdrop-filter   mx-auto text-white">
          <h1 className=" text-center text-3xl font-bold cursor-pointer font-serif">
            Merry Meal
          </h1>
          
         
          <ul className="hidden lg:flex cursor-pointer  uppercase  text-center font-bold lg:text-[18px] md:text-[13px]">
            <li className="lg:p-4 md:px-2 dark:hover:text-green-700 md:pt-1 font-normal">
            <ul className="px-4  text-left text-xl cursor-pointer  "> 
                <li>
                <div className=" items-center">
            <div className="flex  rounded">
                <input
                    type="text"
                    className="block w-full px-2 py-1  bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-gray-600 border-l rounded ">
                    Search
                </button>
            </div>
        </div>
                </li>
            </ul>
            </li>
           
           
            <li className="lg:p-4 md:px-2 pt-1 dark:hover:text-green-700 md:pt-1">
              <a href="/">
                <HomeIcon className="inline-block md:border-none ml-0 mr-2 mb-1 text-gray-900 " />
                Home
              </a>
            </li>
            <li className="lg:p-4 md:px-2 dark:hover:text-green-700 md:pt-1">
              <a href="/meals">
                <RestaurantMenuIcon className="inline-block ml-0 mr-2 mb-1 text-gray-900 " />
                Meals
              </a>
            </li>
           
            <li
              onClick={handleClick}
              className="lg:p-4 relative md:px-2 "
              x-data="{dropdownIpen:false}"
            >
              <ArrowDropDownCircleIcon className="inline-block ml-0 mr-1 mb-2  text-gray-900 " />More
              {showOption && (
                <div className="md:absolute bg-green-500 border p-2 rounded-lg  right-0">
                  <ul className="space-y-2 l md:w-48">
                  <li className="lg:p-4 md:p-2  border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                      <a href="/caregiverReq">
                        <FaUserNurse className="inline-block ml-0 mr-2 mb-1 text-gray-900 " />
                        <span className=" md:inline-block">CareGivers</span>
                      </a>
                    </li>



                    <li className="lg:p-4 md:p-2  border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                      <a href="/about-us">
                        <InfoIcon className="inline-block ml-0 mr-2 mb-1 text-gray-900 " />
                        <span className=" md:inline-block">About Us</span>
                      </a>
                    </li>

                    <li className="lg:p-4 md:px-2 dark:hover:text-green-700">
                      <a href="/contact-us">
                        <ContactsIcon className="inline-block ml-0 mr-1 mb-2 text-gray-900 " />{" "}
                        <span className=" md:inline-block">Contact Us</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="lg:p-4 md:px-2 dark:hover:text-green-700">
              <a href="/login">
                <LoginIcon className="inline-block ml-0 mr-2 mb-1 text-gray-900 " />
                Login
              </a>
            </li>
            <li className="lg:p-4 px-2 md:px-2 dark:hover:text-green-700 ">
              <a href="/register" >
                <AppRegistrationIcon className="inline-block ml-0 mr-1 mb-2 text-gray-900 " />
                Registration
              </a>
            </li>
           

            <li className="lg:p-4 md:px-2 mt-3 lg:mb-1 justify-center h-10 items-center  text-white dark:hover:text-green-700 ">
              <a href="/add-cart" className="bg-orange-600 p-2 hover:bg-orange-700">
              <ShoppingCartIcon className=" text-white" />
              </a>
            </li >

          <li>
              <MenuProfile />
            </li> 
          </ul>
          <div onClick={handleNav} className="block lg:hidden ">
            {!nav ? (
              <AiOutlineClose className="font-bold" size={25} />
            ) : (
              <AiOutlineMenu className="font-bold" size={25} />
            )}
          </div>
          <div
            className={
              !nav
                ? "fixed left-0 top-0 z-20 h-full md:w-[30%] sm:w-[40%] w-[55%] bg-opacity-100 ease-in-out duration-500 bg-green-400 lg:hidden"
                : "fixed left-[-100%]"
            }
          >
            <h1 className="w-full text-3xl font-bold m-4  cursor-pointer font-serif">
              Merry Meal
            </h1>
            <ul className="px-4  text-left text-1xl cursor-pointer  "> 
                <li>
                <div className=" items-center">
            <div className="flex  rounded">
                <input
                    type="text"
                    className="block w-full px-2 py-1  bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-gray-600 border-l rounded ">
                    Search
                </button>
            </div>
        </div>
                </li>
            </ul>

            <ul className="p-4 uppercase text-left text-xl cursor-pointer font-bold ">
              <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                <a href="/">
                  <HomeIcon className="inline-block mr-2 mb-2 text-gray-900 " />
                  Home
                </a>
              </li>
              <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                <a href="/meals">
                  <RestaurantMenuIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                  Meals
                </a>
              </li>
              <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                <a href="/about-us">
                  <InfoIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                  About Us
                </a>
              </li>
              <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                <a href="/contact-us">
                  <ContactsIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                  Contact Us
                </a>
              </li>
              <li className="p-4 border-b border-gray-600 dark:hover:border-gray-400 dark:hover:text-green-700">
                <a href="/login">
                  <LoginIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                  Login
                </a>
              </li>
              <li className="p-4 border-gray-600 hover:border-b dark:hover:border-gray-400 dark:hover:text-green-700">
                <a href="/register">
                  <AppRegistrationIcon className="inline-block ml-0 mr-2 mb-2 text-gray-900 " />
                  Registration
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" md:h-14 sm:h-14 h-12"></div>
    </div>
  );
};

export default Navbar;
