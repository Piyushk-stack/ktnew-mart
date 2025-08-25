import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

import atta from "../pages/img/atta.webp";
import cookingoil from "../pages/img/cookingoil.webp";
import ghee from "../pages/img/ghee.webp";
import masale from "../pages/img/masale.webp";
import fruits from "../pages/img/fruits.webp";
import dairy from "../pages/img/dairy.webp";
import dryfruits from "../pages/img/dryfruits.webp";
import organicfood from "../pages/img/organicfood.webp";

import biscuits from "../pages/img/Snacks/biscuits.webp";
import breakfast from "../pages/img/Snacks/breakfast.webp";
import pasta from "../pages/img/Snacks/pasta.webp";
import jams from "../pages/img/Snacks/jams.webp";
import sweets from "../pages/img/Snacks/sweets.webp";
import chips from "../pages/img/Snacks/chips.webp";
import drinks from "../pages/img/Snacks/drinks.webp";
import tea from "../pages/img/Snacks/tea.webp";

import oral from "../pages/img/Beauty/oral.webp";
import hair from "../pages/img/Beauty/hair.webp";
import bath from "../pages/img/Beauty/bath.webp";
import skin from "../pages/img/Beauty/skin.webp";
import femini from "../pages/img/Beauty/femini.webp";
import babycare from "../pages/img/Beauty/babycare.webp";
import beauty1 from "../pages/img/Beauty/beauty1.webp";
import health from "../pages/img/Beauty/health.webp";

import cleaning from "../pages/img/household/cleaning.webp";
import freshner from "../pages/img/household/freshner.webp";
import detergent from "../pages/img/household/detergent.webp";
import homei from "../pages/img/household/homei.webp";

import img1 from "../pages/img/img1.jpeg";
import img2 from "../pages/img/img2.jpeg";

// ✅ Reusable component with click support
const CategoryRow = ({ items }) => (
  <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 sm:gap-8 md:gap-10 lg:gap-14 text-xs mx-4 sm:mx-10 mb-4">
    {items.map((item, index) => (
      <li
        key={index}
        className="flex flex-col items-center cursor-pointer"
        onClick={item.onClick} // ✅ call handler if exists
      >
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

const Hero = () => {
  const navigate = useNavigate();

  const handleGroceryClick = () => {
    navigate("/grocery");
  };

  const handleSnacksClick = () => {
    navigate("/snacks&drinks");
  };

  const handleBreakfastClick = () => {
    navigate("/breakfast");
  }

  const row1 = [
    { img: atta, label: "Atta, Rice & Dal", onClick: handleGroceryClick },
    { img: cookingoil, label: "Cooking Oil", },
    { img: ghee, label: "Ghee & Vanaspati" },
    { img: masale, label: "Masala & Spices" },
    { img: fruits, label: "Fruits & Vegetables" },
    { img: dairy, label: "Dairy, Bread & Eggs" },
    { img: dryfruits, label: "Dry Fruits" },
    { img: organicfood, label: "Organic Foods" },
  ];

  const row2 = [
    { img: biscuits, label: "Biscuits & Cookies", onClick: handleSnacksClick },
    { img: breakfast, label: "Breakfast Cereals", onClick:handleBreakfastClick },
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

  const row4 = [
    { img: cleaning, label: "Cleaning Needs " },
    { img: freshner, label: "Freshners & Repellents" },
    { img: detergent, label: "Detergents & Fabric Care" },
    { img: homei, label: "Home Improvement" },
  ];

  return (
    <div>
      <div className="mx-4 sm:mx-8 lg:mx-20 mt-45">
        <h1
          className="text-lg sm:text-xl p-2 sm:p-3 mt-3 font-semibold cursor-pointer hover:text-blue-600"
          onClick={handleGroceryClick}
        >
          Grocery & Kitchen
        </h1>
        <CategoryRow items={row1} />

        <h2
          className="text-lg sm:text-xl p-2 sm:p-3 mt-3 font-semibold cursor-pointer hover:text-blue-600"
          onClick={handleSnacksClick}
        >
          <span>Snacks & Drinks</span>
        </h2>
        <CategoryRow items={row2} />

        <h2 className="text-lg sm:text-xl p-2 sm:p-3 mt-3 font-semibold">
          Beauty & Personal Care
        </h2>
        <CategoryRow items={row3} />

        <h2 className="text-lg sm:text-xl p-2 sm:p-3 mt-3 font-semibold">
          Household Essentials
        </h2>
        <CategoryRow items={row4} />

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <img
            src={img2}
            alt="Ad Banner 1"
            className="w-full md:w-1/2 h-40 sm:h-60 md:h-80 object-cover rounded-lg shadow-md"
          />
          <img
            src={img1}
            alt="Ad Banner 2"
            className="w-full md:w-1/2 h-40 sm:h-60 md:h-80 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
