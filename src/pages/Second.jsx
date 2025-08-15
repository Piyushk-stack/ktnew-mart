import cleaning from "./img/household/cleaning.webp";
import freshner from "./img/household/freshner.webp";
import detergent from "./img/household/detergent.webp";
import homei from "./img/household/homei.webp";

import img1 from "./img/img1.jpeg"; 
import img2 from "./img/img2.jpeg";     

const CategoryRow = ({ items }) => (
  <ul className="flex flex-wrap justify-center gap-6 text-xs mx-4 sm:mx-10 mb-1">
    {items.map((item, index) => (
      <li key={index} className="flex flex-col items-center w-20 sm:w-auto">
        <img
          src={item.img}
          className="h-24 sm:h-38 p-1 object-contain"
          alt={item.label}
        />
        <span className="text-center">{item.label}</span>
      </li>
    ))}
  </ul>
);

const Second = () => {
  const row1 = [
    { img: cleaning, label: "Cleaning needs " },
    { img: freshner, label: "freshners & Repellents" },
    { img: detergent, label: "Detergents & Fabric Care" },
    { img: homei, label: "Home Improvement" },
  ];

  return (
    <div className="mx-4 sm:mx-10 md:mx-20">
      <h1 className="text-lg sm:text-xl p-3 mt-3 font-semibold">
        Household Essentials
      </h1>
      <CategoryRow items={row1} />

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
  );
};

export default Second;
