import React, {UseState} from "react";
// Main

import Biscuits_Cookies from '../../pages/PackagedFoods/Biscuits/Biscuits_Cookies.webp';
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

// cards
import oats from '../../pages/PackagedFoods/BreakFast/oats.webp';
import chocoks from '../../pages/PackagedFoods/BreakFast/chocoks.webp';
import oats1 from '../../pages/PackagedFoods/BreakFast/oats1.webp';
import saffolaoats from '../../pages/PackagedFoods/BreakFast/saffolaoats.webp';
import noaddedsugar from '../../pages/PackagedFoods/BreakFast/noaddedsugar.webp';
import almond from '../../pages/PackagedFoods/BreakFast/almond.webp';
import kchocoalmonts from '../../pages/PackagedFoods/BreakFast/kchocoalmonts.webp';
import saffola1 from '../../pages/PackagedFoods/BreakFast/saffola1.webp';
import tatasoulfull from '../../pages/PackagedFoods/BreakFast/tatasoulfull.webp';
import tatadesivegi from '../../pages/PackagedFoods/BreakFast/tatadesivegi.webp';
import masalamast from '../../pages/PackagedFoods/BreakFast/masalamast.webp';
import kellogg from '../../pages/PackagedFoods/BreakFast/kellogg.webp';
import nutrify from '../../pages/PackagedFoods/BreakFast/nutrify.webp';
import baggriesfruits from '../../pages/PackagedFoods/BreakFast/baggriesfruits.webp';
import chocofills from '../../pages/PackagedFoods/BreakFast/chocofills.webp';



const PackagedFood = () => {
  const products = [
    {
      id: 1,
      name: "QUAKER OATMEAL 400G",
      image: oats,
      originalPrice: 90,
      discountedPrice: 86,
    },
    {
      id: 2,
      name: "KELLOGGS CHOCOS",
      image: chocoks,
      originalPrice: 70,
      discountedPrice: 65,
     
    },
    {
      id: 3,
      name: "Quaker Oats",
      image: oats1,
      originalPrice: 118,
      discountedPrice: 110.8,
      discountPercent: 6,
    },
    {
      id: 4,
      name: "Saffola Oats Masala And Coriander",
      image: saffolaoats,
      originalPrice:20,
      discountedPrice: 18,
    
    },
    {
      id: 5,
      name: "SPAR MUESLI NO ADDED SUGAR",
      image: noaddedsugar,
      originalPrice: 200,
      discountedPrice: 149,
    
    },
    {
      id: 6,
      name: "QUAKER OATS ",
      image: oats,
      originalPrice: 135,
      discountedPrice: 129,
    
    },
    {
      id: 7,
      name: "SPAR MUESLI ALMOND N RAISIN",
      image: almond,
      originalPrice: 280,
      discountedPrice: 149,
      
    },
    {
      id: 8,
      name: "KELLOGGS CF PILOW CHOCOS FILLS",
      image: chocofills,
      originalPrice: 99,
      discountedPrice: 93,

    },
    {
      id: 9,
      name: "SAFFOLLA OATS MASALA",
      image: saffola1,
      originalPrice: 240,
      discountedPrice: 215,
    },
    {
      id: 10,
      name: "SOULFULL MASALA OATS TOMATO TWIST",
      image: tatasoulfull,
      originalPrice:260,
      discountedPrice: 249,
    },
    {
      id: 11, 
      name: "SOULFULL MASALA OATS DESI VEGGIE",
      image: tatadesivegi,
      originalPrice: 259,
      discountedPrice: 249,
      
    },{
      id: 12,
      name: "SOULFULL MASALA OATS MAST MASALA",
      image: masalamast,
      originalPrice: 259,
      discountedPrice: 249,
      
    },
    {
      id: 13,
      name: "KELLOGGS FRUIT LOOPS",
      image: kellogg,
      originalPrice: 229,
      discountedPrice: 215,
      
    },
    {
      id: 14,
      name: "SUNDROP NUTRIFY HONEY ROASTED OATS",
      image: nutrify,
      originalPrice: 159,
      discountedPrice: 149,
    
    },
    {
      id: 16,
      name: "KELLOGGS CHOCOLATE AND ALMONDS GRANOLA",
      image: kchocoalmonts,
      originalPrice: 420,
      discountedPrice: 405,
    },
    {
      id: 17,
      name: "BAGRRYS FRUIT AND NUT CRANBERRY MUESLI",
      image: baggriesfruits,
      originalPrice: 540,
      discountedPrice:360,

    },
    {
      id: 18,
      name: "Bagrrys Fruit & Nut Crunchy Muesli With Cranberries",
      image: baggriesfruits,
      originalPrice: 179,
      discountedPrice: 89.5,
      discountPercent: 50,
    },
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
        <div className="border border-gray-300 p-4 sm:p-5 rounded-2xl lg:w-64 bg-white">
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
            Biscuits & Cookies
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

export default PackagedFood;
