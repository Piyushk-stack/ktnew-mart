import React from "react";

// Sidebar Main Icons
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

// Jams & Spreads Product Images
import amulcheese from '../../pages/PackagedFoods/Jams/amulcheese.webp';
import chipotlemayo from '../../pages/PackagedFoods/Jams/chipotlemayo.webp';
import delicious from '../../pages/PackagedFoods/Jams/delicious.webp';
import eggless from '../../pages/PackagedFoods/Jams/eggless.webp';
import honey from '../../pages/PackagedFoods/Jams/honey.webp';
import kissan from '../../pages/PackagedFoods/Jams/kissan.webp';
// import kissanbottle from '../../pages/PackagedFoods/Jams/kissanbottle.webp';
import kissanmango from '../../pages/PackagedFoods/Jams/kissanmango.webp';
import kissanpeanutbutter from '../../pages/PackagedFoods/Jams/kissanpeanutbutter.webp';
import milkymistcheese from '../../pages/PackagedFoods/Jams/milkymistcheese.webp';
import nutela from '../../pages/PackagedFoods/Jams/nutela.webp';
import peanut12 from '../../pages/PackagedFoods/Jams/peanut12.webp';
import peanutbutter from '../../pages/PackagedFoods/Jams/peanutbutter.webp';
import peanutcremy from '../../pages/PackagedFoods/Jams/peanutcremy.webp';
import tandurimayo from '../../pages/PackagedFoods/Jams/tandurimayo.webp';
import vegmayo from '../../pages/PackagedFoods/Jams/vegmayo.webp';


const Jams = () => {
  const products = [
    {
      id: 1,
      name: "Kissan Mixed Fruit Jam 500g",
      image: kissan,
      originalPrice: 120,
      discountedPrice: 110,
      discountPercent: 8,
    },
    {
      id: 2,
      name: "Nutella Chocolate Spread 350g",
      image: nutela,
      originalPrice: 399,
      discountedPrice: 342,
      discountPercent: 14,
    },
    {
      id: 3,
      name: "SPAR Peanut Butter Creamy 340g",
      image: peanutbutter,
      originalPrice: 175,
      discountedPrice: 87.5,
      discountPercent: 50,
    },
    {
      id: 4,
      name: "Dabur Honey 100g",
      image: honey,
      originalPrice: 84,
      discountedPrice: 70,
      discountPercent: 17,
    },
    {
      id: 5,
      name: "Amul Cheese Spread 200g",
      image: amulcheese,
      originalPrice: 120,
      discountedPrice: 110,
      discountPercent: 9,
    },
    {
      id: 6,
      name: "Milky Mist Cheese Spread 200g",
      image: milkymistcheese,
      originalPrice: 120,
      discountedPrice: 100,
      discountPercent: 17,
    },
    {
      id: 7,
      name: "Wingreens Veg Mayonnaise 200g",
      image: vegmayo,
      originalPrice: 75,
      discountedPrice: 49,
      discountPercent: 35,
    },
    // {
    //   id: 8,
    //   name: "SPAR PEANUT BUTTER CHOCOLATE CREAMY 340G",
    //   image: peanutbutter,
    //   originalPrice: 189,
    //   discountedPrice: 94.5,
    // //   discountPercent: 35,
    // },
    // {
    //   id: 9,
    //   name: "Kissan Mixed Fruit Jam",
    //   image: kissanbottle,
    //   originalPrice: 270,
    //   discountedPrice: 238,
    // //   discountPercent: 35,
    // },
    {
      id: 10,
      name: "Wingreens Veg Mayonnaise 200g",
      image: vegmayo,
      originalPrice: 75,
      discountedPrice: 49,
    //   discountPercent: 35,
    },
    {
      id: 11,
      name: "SPAR PEANUT BUTTER CREAMY 340G",
      image: peanutcremy,
      originalPrice: 175,
      discountedPrice: 89,
    //   discountPercent: 35,
    },
    {
      id: 12,
      name: "WINGREENS CHIPOTLE MAYONNAISE 200G",
      image: chipotlemayo,
      originalPrice: 75,
      discountedPrice: 49,
      discountPercent: 35,
    },
    {
      id: 13,
      name: "AMUL TABLE MARGARINE 500GMS",
      image: delicious,
      originalPrice: 150,
      discountedPrice: 105,
    //   discountPercent: 35,
    },
    {
      id: 14,
      name: "VEEBA EGGLESS MAYONNAISE CHEFS SPECIAL 875G",
      image: eggless,
      originalPrice: 150,
      discountedPrice: 105,
    //   discountPercent: 35,
    },
    {
      id: 15,
      name: "KISSAN FRUITY JAM MANGO BOTTLE 188 G",
      image: kissanmango,
      originalPrice: 175,
      discountedPrice: 89,
    //   discountPercent: 35,
    },
    {
      id: 16,
      name: "KISSAN PEANUT BUTTER CRUNCHY 340G",
      image: kissanpeanutbutter,
      originalPrice: 75,
      discountedPrice: 49,
      discountPercent: 35,
    },
    {
      id: 17,
      name: "KISSAN PEANUT BUTTER",
      image: peanut12,
      originalPrice: 75,
      discountedPrice: 49,
      discountPercent: 35,
    },
    {
      id: 18,
      name: "WINGREENS TANDOORI MAYONNAISE 200G",
      image: tandurimayo,
      originalPrice: 75,
      discountedPrice: 49,
      discountPercent: 35,
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
      <h1 className="font-semibold text-xl sm:text-2xl mb-6">Packaged Foods</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Categories */}
        <div className="border border-gray-300 p-4 sm:p-9 rounded-2xl lg:w-64 bg-white">
          {/* Mobile */}
          <ul className="grid grid-cols-3 gap-4 sm:hidden">
            {categories.map((cat, index) => (
              <li key={index} className="flex flex-col items-center text-center hover:bg-gray-100 p-2 rounded-lg transition">
                <img src={cat.img} className="h-12 w-12 rounded-full object-cover border" alt={cat.label} />
                <span className="text-xs font-medium mt-1">{cat.label}</span>
              </li>
            ))}
          </ul>

          {/* Desktop */}
          <ul className="hidden sm:block space-y-3 sm:space-y-4">
            {categories.map((cat, index) => (
              <li key={index} className="flex items-center gap-2 sm:gap-3 hover:bg-gray-100 p-2 rounded-lg transition">
                <img src={cat.img} className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover border" alt={cat.label} />
                <span className="text-sm sm:text-base font-medium">{cat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <span className="font-bold text-lg sm:text-2xl">Jams & Spreads</span>

          {/* Product Grid */}
          <div className="p-4 sm:p-6 border border-gray-400 bg-gray-50 mt-4 sm:mt-6 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition relative p-3 flex flex-col">
                  {/* Discount Badge */}
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                    {product.discountPercent}% OFF
                  </span>

                  {/* Image */}
                  <img src={product.image} alt={product.name} className="w-full h-36 sm:h-40 object-contain p-2 sm:p-4" />

                  {/* Details */}
                  <div className="px-2 sm:px-4 pb-3 sm:pb-4 text-center flex flex-col flex-1">
                    <h2 className="text-xs sm:text-sm font-semibold truncate">{product.name}</h2>

                    {/* Price */}
                    <div className="mt-1 sm:mt-2">
                      <span className="text-gray-500 line-through text-xs sm:text-sm mr-1 sm:mr-2">₹{product.originalPrice}</span>
                      <span className="text-red-500 font-semibold text-xs sm:text-sm">₹{product.discountedPrice}</span>
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

export default Jams;
