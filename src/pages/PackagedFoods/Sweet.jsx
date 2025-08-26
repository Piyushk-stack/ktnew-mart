import React, {UseState} from "react";
// Main
import Biscuits_Cookies from '../../pages/PackagedFoods/Biscuits/Biscuits_Cookies.webp';

// cards image
import Breakfastmain from "../../pages/PackagedFoods/BreakFast/Breakfastmain.webp";
import Chocolatesmain from "../../pages/PackagedFoods/Chocolates/Chocolatesmain.webp";
import Ketchupmain from "../../pages/PackagedFoods/Ketchups/Ketchupmain.webp";
import Pastamain from "../../pages/PackagedFoods/Pasta&Noodles/Pastamain.webp";
import Jamsmain from "../../pages/PackagedFoods/Jams/Jamsmain.webp";
import Instantmain from "../../pages/PackagedFoods/InstantFood/Instantmain.webp";
import Snacksmain from "../../pages/PackagedFoods/Snacks/Snacksmain.webp";
import Sweets from "../../pages/PackagedFoods/Sweets/Sweets.webp";
import Bakery from "../../pages/PackagedFoods/Bakery/Bakery.webp";
import Pickles from "../../pages/PackagedFoods/Pickles/Pickles.webp";

// images in main
import besanladdu from "../PackagedFoods/Sweets/besanladdu.webp";
import boondiladoo from "../PackagedFoods/Sweets/boondiladoo.webp";
import chikki from "../PackagedFoods/Sweets/chikki.webp";
import halwa from "../PackagedFoods/Sweets/halwa.webp";
import mooti from "../PackagedFoods/Sweets/mooti.webp";
import mysorepaak from "../PackagedFoods/Sweets/mysorepaak.webp";
import poriladdu from "../PackagedFoods/Sweets/poriladdu.webp";
import sonpapddi from "../PackagedFoods/Sweets/sonpapddi.webp";



const Sweet = () => {
  const products = [
    {
      id: 1,
      name: "SRI DAIRY MOTICHOOR LADOO 250G",
      image: mooti ,
      originalPrice: 165,
      discountedPrice: 82.5,
    //   discountPercent: 37,
    },
    {
      id: 2,
      name: "SRI DAIRY TIRUNELVELI HALWA 100G",
      image: halwa,
      originalPrice: 70,
      discountedPrice: 35,
    //   discountPercent: 50,
    },
    {
      id: 3,
      name: "LAL SHAHI SOAN PAPDI 200G BOGO",
      image: sonpapddi,
      originalPrice: 150,
      discountedPrice: 75,
    //   discountPercent: 6,
    },
    {
      id: 4,
      name: "LAL BESAN LADDOO REG 200G",
      image: besanladdu,
      originalPrice: 150,
      discountedPrice: 75,
    //   discountPercent: 50,
    },
    {
      id: 5,
      name: "SRI DAIRY BOONDI LADOO 250G",
      image: boondiladoo,
      originalPrice: 155,
      discountedPrice: 77,
    //   discountPercent: 4,
    },
    {
      id: 6,
      name: "PON PON PEANUT CHIKKI 160G",
      image: chikki,
      originalPrice: 65,
      discountedPrice: 58.5,
    //   discountPercent: 37,
    },
    {
      id: 7,
      name: "LAL MYSOREPAK CLASSIC 200G",
      image: mysorepaak,
      originalPrice: 190,
      discountedPrice: 95,
    //   discountPercent: 50,
    },
    {
      id: 8,
      name: "PON PON PORI LADU 200G",
      image: poriladdu,
      originalPrice: 65,
      discountedPrice: 58.5,
    //   discountPercent: 37,
    },
    // {
    //   id: 9,
    //   name: "Yippee Noodles Magic Masala",
    //   image: moodmasala,
    //   originalPrice: 88,
    //   discountedPrice: 81,
    // //   discountPercent: 50,
    // },
    // {
    //   id: 10,
    //   name: "Maggi 2Min Noodles Veg Masala 248G",
    //   image: maggie12,
    //   originalPrice: 65,
    //   discountedPrice: 60,
    // //   discountPercent: 37,
    // },
    // {
    //   id: 11, 
    //   name: "Maggi 2-Minute Masala Instant Noodles",
    //   image: maggie2,
    //   originalPrice: 62,
    //   discountedPrice: 60,
    // //   discountPercent: 50,
    // },{
    //   id: 12,
    //   name: "NISSIN CUP NOODLES SEA FOOD 70G",
    //   image: seafood,
    //   originalPrice:55,
    //   discountedPrice: 52.5,
    // //   discountPercent: 37,
    // },
    // {
    //   id: 13,
    //   name: "NISSIN CUP NOODLES MUTTON ROGAN JOSH 70G",
    //   image: cup,
    //   originalPrice: 55,
    //   discountedPrice: 52.2,
    // //   discountPercent: 50,
    // },
    // {
    //   id: 14,
    //   name: "TOP RAMEN CUP N MAZEDAAR MASALA 70G",
    //   image: cupmasala,
    //   originalPrice: 55,
    //   discountedPrice: 52.5,
    // //   discountPercent: 37,
    // },
    // {
    //   id: 15,
    //   name: "CHINGS VEG NOODLES 150G",
    //   image: chings,
    //   originalPrice: 32,
    //   discountedPrice: 30,
    // //   discountPercent: 50,
    // },
    // {
    //   id: 16,
    //   name: "Ying Yang Hakka Noodles",
    //   image: hakka,
    //   originalPrice: 69,
    //   discountedPrice: 65,
    // //   discountPercent: 37,
    // },
    // {
    //   id: 18,
    //   name: "SAVORIT VERMICELLI LONG CUT 500G",
    //   image: seviya,
    //   originalPrice: 60,
    //   discountedPrice: 57,
    // //   discountPercent: 50,
    // },
    // {
    //   id: 19,
    //   name: "Unibic",
    //   image: unibic,
    //   originalPrice: 139,
    //   discountedPrice: 88,
    //   discountPercent: 37,
    // },
    // {
    //   id: 20,
    //   name: "BRITANNIA 2020",
    //   image: twtw,
    //   originalPrice: 179,
    //   discountedPrice: 89.5,
    //   discountPercent: 50,
    // },
    // {
    //   id: 21,
    //   name: "BourBon",
    //   image: bourbon,
    //   originalPrice: 139,
    //   discountedPrice: 88,
    //   discountPercent: 37,
    // },
  ];

  const categories = [
    { img: Biscuits_Cookies, label: "Biscuits & Cookies" },
    { img: Breakfastmain, label: "BreakFast & Cereals" },
    { img: Chocolatesmain, label: "Chocolates & Candies" },
    { img: Ketchupmain, label: "Ketchup & Sauces" },
    { img: Pastamain, label: "Pasta & Noodles" },
    { img: Jamsmain, label: "Jams & Spreads" },
    { img: Instantmain, label: "Instant Food" },
    { img: Snacksmain, label: "Snacks & Farsans" },
    { img: Sweets, label: "Sweets" },
    { img: Bakery, label: "Bakery Items" },
    { img: Pickles, label: "Pickles" },
  ];

  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-20 mt-38 py-6">
      {/* Page Title */}
      <h1 className="font-semibold text-xl sm:text-2xl mb-6">Packaged Foods</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Categories */}
        <div className="border border-gray-300 p-4 sm:p-9 rounded-2xl lg:w-64 bg-white">
          {/* Mobile: Grid with image on top */}
          <ul className="grid grid-cols-3 gap-4 sm:hidden">
            {categories.map((cat, index) => (
              <li
                key={index}
                className="flex flex-col items-center text-center hover:bg-gray-100 p-2 rounded-lg transition"
              >
                <img
                  src={cat.img}
                  className="h-12 w-12 rounded-full object-cover border"
                  alt={cat.label}
                />
                <span className="text-xs font-medium mt-1">{cat.label}</span>
              </li>
            ))}
          </ul>

          {/* Desktop: Vertical list */}
          <ul className="hidden sm:block space-y-3 sm:space-y-4">
            {categories.map((cat, index) => (
              <li
                key={index}
                className="flex items-center gap-2 sm:gap-3 hover:bg-gray-100 p-2 rounded-lg transition"
              >
                <img
                  src={cat.img}
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover border"
                  alt={cat.label}
                />
                <span className="text-sm sm:text-base font-medium">
                  {cat.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Banner */}
          <span className="font-bold text-lg sm:text-2xl">
            Pasta & Noodles
          </span>

          {/* Product Grid */}
          <div className="p-4 sm:p-6 border border-gray-400 bg-gray-50 mt-4 sm:mt-6 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition relative p-3 flex flex-col"
                >
                  {/* Discount Badge */}
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                    {product.discountPercent}% OFF
                  </span>

                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-36 sm:h-40 object-contain p-2 sm:p-4"
                  />

                  {/* Details */}
                  <div className="px-2 sm:px-4 pb-3 sm:pb-4 text-center flex flex-col flex-1">
                    <h2 className="text-xs sm:text-sm font-semibold truncate">
                      {product.name}
                    </h2>

                    {/* Price */}
                    <div className="mt-1 sm:mt-2">
                      <span className="text-gray-500 line-through text-xs sm:text-sm mr-1 sm:mr-2">
                        ₹{product.originalPrice}
                      </span>
                      <span className="text-red-500 font-semibold text-xs sm:text-sm">
                        ₹{product.discountedPrice}
                      </span>
                    </div>

                    {/* Add to Cart */}
                    <button className="mt-2 sm:mt-3 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-medium py-1.5 sm:py-2 px-3 sm:px-4 rounded w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sweet;
