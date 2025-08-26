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

// images in main cards
import alpenliebe from '../../pages/PackagedFoods/Chocolates/alpenliebe.webp';
import bourvilla from '../../pages/PackagedFoods/Chocolates/bourvilla.webp';
import cadbury from '../../pages/PackagedFoods/Chocolates/cadbury.webp';
import cadburynuts from '../../pages/PackagedFoods/Chocolates/cadburynuts.webp';
import celebration from '../../pages/PackagedFoods/Chocolates/celebration.webp';
import chupachups from '../../pages/PackagedFoods/Chocolates/chupachups.webp';
import dairymilk from '../../pages/PackagedFoods/Chocolates/dairymilk.webp';
import exoticdark from '../../pages/PackagedFoods/Chocolates/exoticdark.webp';
import ferreo from '../../pages/PackagedFoods/Chocolates/ferreo.webp';
import fruitsandnuts from '../../pages/PackagedFoods/Chocolates/fruitsandnuts.webp';
import gems from '../../pages/PackagedFoods/Chocolates/gems.webp';
import kacchamango from '../../pages/PackagedFoods/Chocolates/kacchamango.webp';
import kitkatdesset from '../../pages/PackagedFoods/Chocolates/kitkatdesset.webp';
import moment from '../../pages/PackagedFoods/Chocolates/moment.webp';
import munch from '../../pages/PackagedFoods/Chocolates/munch.webp';
import natureandnature from '../../pages/PackagedFoods/Chocolates/natureandnature.webp';
import pralines from '../../pages/PackagedFoods/Chocolates/pralines.webp';
import roastedalmonts from '../../pages/PackagedFoods/Chocolates/roastedalmonts.webp';
import rolacola from '../../pages/PackagedFoods/Chocolates/rolacola.webp';
import silk2 from '../../pages/PackagedFoods/Chocolates/silk2.webp';
import silk from '../../pages/PackagedFoods/Chocolates/silk.webp';
import silk12 from '../../pages/PackagedFoods/Chocolates/silk12.webp';



const Chocolatess = () => {
  const products = [
    {
      id: 1,
      name: "CADBURY CRACKLE",
      image: dairymilk,
      originalPrice: 60,
      discountedPrice: 55,
    //   discountPercent: 37,
    },
    {
      id: 2,
      name: "Cadbury Dairy Milk Silk Fruit & Nut Chocolat",
      image: cadbury,
      originalPrice: 215,
      discountedPrice: 209,
    //   discountPercent: 50,
    },
    {
      id: 3,
      name: "CADBURY FRUIT AND NUTT 36G",
      image: cadburynuts,
      originalPrice: 118,
      discountedPrice: 110.8,
      discountPercent: 6,
    },
    {
      id: 4,
      name: "CADBURY ROASTED ALMOND 36",
      image: roastedalmonts,
      originalPrice: 60,
      discountedPrice: 55,
    //   discountPercent: 50,
    },
    {
      id: 5,
      name: "Cadbury Dairy Milk Silk Roast Almond Chocolate",
      image: silk,
      originalPrice: 109,
       discountedPrice: 100,
    //   discountPercent: 4,
    },
    {
      id: 6,
      name: "NESTLE MUNCH POUCH 147.9G",
      image: munch,
      originalPrice: 72,
      discountedPrice: 67,
    //   discountPercent: 37,
    },
    {
      id: 7,
      name: "CADBURY SILK WHOLE HAZELNUT CHOCOLATE 54G",
      image: silk2,
      originalPrice: 110,
      discountedPrice: 100,
    //   discountPercent: 50,
    },
    {
      id: 8,
      name: "Cadbury Fruit And Nutt",
      image: fruitsandnuts,
      originalPrice: 59,
   discountedPrice: 55,
    //   discountPercent: 37,
    },
    {
      id: 9,
      name: "Cadbury Dairy Milk Silk Mousse",
      image: silk12,
      originalPrice: 110,
      discountedPrice: 100,
    //   discountPercent: 50,
    },
    {
      id: 10,
      name: "KITKAT RICH CHOCOLATE TRUFFLE 50G",
      image: kitkatdesset,
      originalPrice: 95,
      discountedPrice: 90,
    //   discountPercent: 37,
    },
    {
      id: 11, 
      name: "CADBURY BOURNVILLE RICH COCOA 30G",
      image: bourvilla,
      originalPrice: 69,
      discountedPrice: 60,
    //   discountPercent: 50,
    },{
      id: 12,
      name: "CADBURY CELEBRATIONS 144.1G",
      image: celebration,
      originalPrice: 152,
       discountedPrice: 145,
    //   discountPercent: 37,
    },
    {
      id: 13,
      name: "CADBURY SILK PRALINE SMALL 176G",
      image: pralines,
      originalPrice: 530,
      discountedPrice: 525,
    //   discountPercent: 50,
    },
    {
      id: 14,
      name: "Ferrero Rocher Moments Chocolate 16 Pieces",
      image: ferreo,
      originalPrice: 134,
      discountedPrice: 125,
    //   discountPercent: 37,
    },
    {
      id: 16,
      name: "Ferrero Rocher Moments Chocolate 16 Pieces",
      image: moment,
      originalPrice: 133.4,
      discountedPrice: 125,
    //   discountPercent: 50,
    },
    {
      id: 17,
      name: "ALPENLIEBE JUICYFILLS ASSORTED POUCH 152G",
      image: alpenliebe,
      originalPrice: 59,
      discountedPrice: 50,
    //   discountPercent: 37,
    },
    {
      id: 18,
      name: "NATURE N NATURE MILK CHOCO COIN C 45G",
      image: natureandnature,
      originalPrice: 102,
      discountedPrice: 99,
    //   discountPercent: 50,
    },
    {
      id: 19,
      name: "PARLE BIGGER KACCHA MANGO BITE CANDIES 217.8G",
      image: kacchamango,
      originalPrice: 53,
      discountedPrice: 48,
    //   discountPercent: 37,
    },
    {
      id: 20,
      name: "PERFETTI CHUPA CHUPS MIXUP POP 192G",
      image: chupachups,
      originalPrice: 86,
     discountedPrice: 80,
    //   discountPercent: 50,
    },
    {
      id: 21,
      name: "PARLE ROLA COLA 100G",
      image: rolacola,
      originalPrice: 30,
      discountedPrice: 24,
    //   discountPercent: 37,
    },
    {
      id: 22,
      name: "HERSHEYS EXOTIC DARK CHOCOLATE ALMND GUAVA MEXICAN CHILI 90G",
      image: exoticdark,
      originalPrice: 199,
      discountedPrice: 180,
    //   discountPercent: 37,
    },
    {
      id: 23,
      name: "CADBURY GEMS HOME TREAT PACK 120.8G",
      image: gems,
      originalPrice: 71,
      discountedPrice: 67,
    //   discountPercent: 37,
    },
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
      <h1 className="font-semibold text-xl sm:text-2xl mb-6">Chocolates</h1>

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
            Chocolates & Candies
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

export default Chocolatess;
