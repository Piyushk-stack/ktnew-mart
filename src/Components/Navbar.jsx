import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import kt1 from "../assets/kt1.png";
import search from "../assets/search.png";
import category from "../assets/category.png";
import deals from "../assets/deals.png";
import cart from "../assets/cart.png";
import login from "../assets/login.png";
import grocery from "../assets/grocery.png";
import packagedfood from "../assets/packagedfood.png";
import dairybeverages from "../assets/dairybeverages.png";
import homekitchen from "../assets/homekitchen.png";
import personalcare from "../assets/personalcare.png";
import babycarekids from "../assets/babycarekids.png";
import petfoods from "../assets/petfoods.png";
import toysstationary from "../assets/toysstationary.png";
import luggageandtravel from "../assets/luggageandtravel.png";
import offline from "../assets/offline.png";

// Categories with path for navigation
const categories = [
  { img: grocery, text: "Grocery", path: "/grocery" },
  { img: packagedfood, text: "Packaged Food", path: "/packaged-food" },
  { img: dairybeverages, text: "Dairy & Beverages", path: "/dairy-beverages" },
  { img: homekitchen, text: "Home & Kitchen", path: "/home-kitchen" },
  { img: personalcare, text: "Personal Care", path: "/personal-care" },
  { img: babycarekids, text: "Baby Care & Kids", path: "/baby-care-kids" },
  { img: petfoods, text: "Pet Foods", path: "/pet-foods" },
  { img: toysstationary, text: "Toys & Stationery", path: "/toys-stationery" },
  { img: luggageandtravel, text: "Luggage & Travel", path: "/luggage-travel" },
  { img: offline, text: "Offline", path: "/offline" },
];

const Navbar = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const itemWidth = container.children[0].offsetWidth + 80;
      container.scrollBy({ left: itemWidth * 2, behavior: "smooth" });
      setCurrentIndex((prev) => Math.min(prev + 2, categories.length - 1));
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const itemWidth = container.children[0].offsetWidth + 80;
      container.scrollBy({ left: -itemWidth * 2, behavior: "smooth" });
      setCurrentIndex((prev) => Math.max(prev - 2, 0));
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      {/* Top Navbar */}
      <div className="flex flex-wrap justify-between md:justify-around items-center bg-gray-200 py-3 px-4 md:px-0 gap-3">
        {/* Logo */}
        <div className="mb-0">
          <li
            className="flex items-center gap-1 sm:gap-2 cursor-pointer"
            onClick={handleLogoClick}
          >
            <img src={kt1} className="h-10 p-1" alt="Logo" />
          </li>
        </div>

        <div className="text-xs md:text-sm font-medium">Current Location</div>

        {/* Menu Items */}
        <div className="w-full md:w-auto">
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-7 text-xs md:text-sm">
              <li className="flex items-center gap-1 sm:gap-2 cursor-pointer">
                <img src={search} className="h-4" alt="Search" />
                <span>Search</span>
              </li>
              <li className="flex items-center gap-1 sm:gap-2 cursor-pointer">
                <img src={category} className="h-4" alt="Categories" />
                <span>Categories</span>
              </li>
              <li className="flex items-center gap-1 sm:gap-2 cursor-pointer">
                <img src={deals} className="h-4" alt="Deals" />
                <span>Deals</span>
              </li>
              <li className="flex items-center gap-1 sm:gap-2 cursor-pointer">
                <img src={cart} className="h-4" alt="Cart" />
                <span>Cart</span>
              </li>
              <li
                className="flex items-center gap-1 sm:gap-2 cursor-pointer"
                onClick={handleLoginClick}
              >
                <img src={login} className="h-4" alt="Login" />
                <span>Login</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Categories Section */}
      <div className="relative flex items-center px-4 md:px-12 py-3">
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 bg-gray-300 hover:bg-gray-400 p-2 rounded-full shadow hidden sm:block"
          >
            ◀
          </button>
        )}

        <ul
          ref={scrollRef}
          className="flex gap-6 sm:gap-12 md:gap-20 text-[10px] sm:text-xs overflow-x-auto sm:overflow-x-hidden scroll-smooth no-scrollbar"
        >
          {categories.map((cat, index) => (
            <li
              key={index}
              onClick={() => navigate(cat.path)}
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 cursor-pointer min-w-max hover:text-green-600"
            >
              <img src={cat.img} className="h-8 sm:h-9" alt={cat.text} />
              <span>{cat.text}</span>
            </li>
          ))}
        </ul>

        {currentIndex < categories.length - 2 && (
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 bg-gray-300 hover:bg-gray-400 p-2 rounded-full shadow hidden sm:block"
          >
            ▶
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
