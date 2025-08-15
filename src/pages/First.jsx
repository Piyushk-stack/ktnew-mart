import React from "react";

import atta from '../../src/Pages/img/atta.webp';
import cookingOil from '../../src/Pages/img/cookingOil.webp';
import ghee from '../../src/Pages/img/ghee.webp';
import masale from '../../src/Pages/img/masale.webp';
import fruits from '../../src/Pages/img/fruits.webp';
import dairy from '../../src/Pages/img/dairy.webp';
import dryFruits from '../../src/Pages/img/dryFruits.webp';
import organicfood from '../../src/Pages/img/organicfood.webp';

import biscuits from '../../src/Pages/img/Snacks/biscuits.webp';
import breakfast from '../../src/Pages/img/Snacks/breakfast.webp';
import pasta from '../../src/Pages/img/Snacks/pasta.webp';
import jams from '../../src/Pages/img/Snacks/jams.webp';
import sweets from '../../src/Pages/img/Snacks/sweets.webp';
import chips from '../../src/Pages/img/Snacks/chips.webp';
import drinks from '../../src/Pages/img/Snacks/drinks.webp';
import tea from '../../src/Pages/img/Snacks/tea.webp';

import oral from '../../src/Pages/img/Beauty/oral.webp';
import hair from '../../src/Pages/img/Beauty/hair.webp';
import bath from '../../src/Pages/img/Beauty/bath.webp';
import skin from '../../src/Pages/img/Beauty/skin.webp';
import femini from '../../src/Pages/img/Beauty/femini.webp';
import babycare from '../../src/Pages/img/Beauty/babycare.webp';
import beauty1 from '../../src/Pages/img/Beauty/beauty1.webp';
import health from '../../src/Pages/img/Beauty/health.webp';


// Reusable component for category rows (responsive)
const CategoryRow = ({ items }) => (
  <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 sm:gap-8 md:gap-10 lg:gap-14 text-xs mx-4 sm:mx-10 mb-4">
    {items.map((item, index) => (
      <li key={index} className="flex flex-col items-center">
        <img
          src={item.img}
          className="h-20 w-20 sm:h-24 sm:w-24 p-1 object-contain"
          alt={item.label}
        />
        <span className="text-center mt-1 text-[10px] sm:text-xs">{item.label}</span>
      </li>
    ))}
  </ul>
);

const First = () => {
  const row1 = [
    { img: atta, label: "Atta, Rice & Dal" },
    { img: cookingOil, label: "Cooking Oil" },
    { img: ghee, label: "Ghee & Vanaspati" },
    { img: masale, label: "Masala & Spices" },
    { img: fruits, label: "Fruits & Vegetables" },
    { img: dairy, label: "Dairy, Bread & Eggs" },
    { img: dryFruits, label: "Dry Fruits" },
    { img: organicfood, label: "Organic Foods" },
  ];

  const row2 = [
    { img: biscuits, label: "Biscuits & Cookies" },
    { img: breakfast, label: "Breakfast Cereals" },
    { img: pasta, label: "Pasta & Noodles" },
    { img: jams, label: "Jams & Spreads" },
    { img: sweets, label: "Sweets & Chocolates" },
    { img: chips, label: "Chips & Namkeens" },
    { img: drinks, label: "Drinks & Juices" },
    { img: tea, label: "Tea, Coffee & Beverages" },
  ];

  const row3 = [
    { img: oral, label: "Oral Care" },
    { img: hair, label: "Hair Care" },
    { img: bath, label: "Bath & Body" },
    { img: skin, label: "Skin Care" },
    { img: femini, label: "Feminine Needs" },
    { img: babycare, label: "Baby Care" },
    { img: beauty1, label: "Beauty & Cosmetics" },
    { img: health, label: "Health & Pharma" },
  ];

  return (
    <div className="mx-4 sm:mx-8 lg:mx-20 mt-45">
      <h1 className="text-lg sm:text-xl p-2 sm:p-3 mt-3 font-semibold">Grocery & Kitchen</h1>
      <CategoryRow items={row1} />

      <h2 className="text-lg sm:text-xl p-2 sm:p-3 mt-3 font-semibold">Snacks & Drinks</h2>
      <CategoryRow items={row2} />

      <h2 className="text-lg sm:text-xl p-2 sm:p-3 mt-3 font-semibold">Beauty & Personal Care</h2>
      <CategoryRow items={row3} />
    </div>
  );
};

export default First;
