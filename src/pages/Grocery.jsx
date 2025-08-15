import React, { useState } from "react";

// Main banner image
import Main from "./img/Grocery/Main.webp";

// Category images
import rice from "./img/Grocery/rice.jpeg";
import cookingoil from "./img/Grocery/cookingoil.jpeg";
import ghee12 from "./img/Grocery/ghee12.jpeg";
import flour from "./img/Grocery/flour.jpeg";
import spices from "./img/Grocery/spices.jpeg";
import pulses from "./img/Grocery/pulses.jpeg";
import dry from "./img/Grocery/dry.jpeg";
import organo from "./img/Grocery/organo.jpg";
import salt from "./img/Grocery/salt.jpeg";

// Product images
import rice11 from "./img/Rice/rice11.jpg";
import rice13 from "./img/Rice/rice13.jpg";
import rice14 from "./img/Rice/rice14.jpg";
import rice15 from "./img/Rice/rice15.jpg";
import rice16 from "./img/Rice/rice16.jpg";
import rice17 from "./img/Rice/rice17.jpg";
import rice18 from "./img/Rice/rice18.jpg";
import rice19 from "./img/Rice/rice19.jpg";
import rice20 from "./img/Rice/rice20.jpg";
import rice21 from "./img/Rice/rice21.jpg";
import rice22 from "./img/Rice/rice22.jpg";
import rice23 from "./img/Rice/rice23.jpg";
import rice24 from "./img/Rice/rice24.jpg";
import rice25 from "./img/Rice/rice25.jpg";
import rice26 from "./img/Rice/rice26.jpg";

const Grocery = () => {
  const quantityOptions = ["1 Kg", "2 Kg", "5 Kg", "10 Kg"];
  const [selectedQuantities, setSelectedQuantities] = useState({});

  const handleQuantityChange = (productId, value) => {
    setSelectedQuantities((prev) => ({ ...prev, [productId]: value }));
  };

  const products = [
    { id: 1, name: "Heritage Popular Classic", weight: "1 Kg", image: rice11, originalPrice: 139, discountedPrice: 88, discountPercent: 37 },
    { id: 2, name: "Heritage Basmathi Super Dubar", weight: "1 Kg", image: rice13, originalPrice: 179, discountedPrice: 89.5, discountPercent: 50 },
    { id: 3, name: "India Gate Feast Rozzana", weight: "1 Kg", image: rice14, originalPrice: 118, discountedPrice: 110.8, discountPercent: 6 },
    { id: 4, name: "Farmers Harvest Rozana", weight: "1 Kg", image: rice15, originalPrice: 125, discountedPrice: 112, discountPercent: 50 },
    { id: 5, name: "Heritage Basmathi Royal Rice", weight: "1 Kg", image: rice16, originalPrice: 145, discountedPrice: 139, discountPercent: 4 },
    { id: 6, name: "Sri Sri Tattva Basmati Rice", weight: "1 Kg", image: rice17, originalPrice: 151, discountedPrice: 145, discountPercent: 4 },
    { id: 7, name: "India Gate Basmathi Rice", weight: "1 Kg", image: rice18, originalPrice: 157, discountedPrice: 150.7, discountPercent: 4 },
    { id: 8, name: "India Gate Tibar Basmathi Rice", weight: "1 Kg", image: rice19, originalPrice: 166, discountedPrice: 156.48, discountPercent: 6 },
    { id: 9, name: "Unity Basmathi Rice", weight: "1 Kg", image: rice20, originalPrice: 175, discountedPrice: 168, discountPercent: 4 },
    { id: 10, name: "Farmers Harvest Gold Basmati", weight: "1 Kg", image: rice21, originalPrice: 212, discountedPrice: 195.55, discountPercent: 8 },
    { id: 11, name: "India Gate Super Basmathi Rice", weight: "1 Kg", image: rice22, originalPrice: 252, discountedPrice: 209.1, discountPercent: 17 },
    { id: 12, name: "India Gate Basmati Classic Rice", weight: "1 Kg", image: rice23, originalPrice: 900, discountedPrice: 680, discountPercent: 24 },
    { id: 13, name: "Natchiyar Raw Rice Super", weight: "1 Kg", image: rice24, originalPrice: 1340, discountedPrice: 1055, discountPercent: 21 },
    { id: 14, name: "Heritage Platinum Basmati", weight: "1 Kg", image: rice25, originalPrice: 125, discountedPrice: 112, discountPercent: 10 },
    { id: 15, name: "Natchiyar Boiled Rice Super", weight: "1 Kg", image: rice26, originalPrice: 1650, discountedPrice: 1475, discountPercent: 11 },
    { id: 16, name: "Natchiyar Royal Gold Boiled", weight: "1 Kg", image: rice26, originalPrice: 1800, discountedPrice: 1635, discountPercent: 9 },
  ];

  const categories = [
    { img: rice, label: "Rice & Rice Products" },
    { img: cookingoil, label: "Cooking Oil" },
    { img: ghee12, label: "Ghee & Vanaspati" },
    { img: flour, label: "Flours" },
    { img: spices, label: "Masala & Spices" },
    { img: salt, label: "Salt/Sugar/Jaggery" },
    { img: pulses, label: "Dal" },
    { img: dry, label: "Dry Fruits" },
    { img: organo, label: "Organic Foods" },
  ];

  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-20 mt-24 py-6">
      {/* Page Title */}
      <h1 className="font-semibold text-xl sm:text-2xl mb-6">Grocery</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Categories */}
        <div className="border border-gray-300 p-4 sm:p-5 rounded-2xl lg:w-64 bg-white">
          <ul className="space-y-3 sm:space-y-4">
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
                <span className="text-sm sm:text-base font-medium">{cat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Banner */}
          <span className="font-bold text-lg sm:text-2xl">Rice</span>

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
                    <h2 className="text-xs sm:text-sm font-semibold truncate">{product.name}</h2>
                    <p className="text-gray-500 text-[11px] sm:text-xs">{product.weight}</p>

                    {/* Price */}
                    <div className="mt-1 sm:mt-2">
                      <span className="text-gray-500 line-through text-xs sm:text-sm mr-1 sm:mr-2">
                        ₹{product.originalPrice}
                      </span>
                      <span className="text-red-500 font-semibold text-xs sm:text-sm">
                        ₹{product.discountedPrice}
                      </span>
                    </div>

                    {/* Quantity */}
                    <select
                      value={selectedQuantities[product.id] || quantityOptions[0]}
                      onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                      className="mt-2 sm:mt-3 border border-gray-300 rounded px-1 sm:px-2 py-0.5 sm:py-1 text-xs sm:text-sm w-full"
                    >
                      {quantityOptions.map((qty, idx) => (
                        <option key={idx} value={qty}>{qty}</option>
                      ))}
                    </select>

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

export default Grocery;
