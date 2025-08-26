import { Mail, Headphones } from "lucide-react";
import { FaGooglePlay, FaApple, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className=" bg-white border-t mt-8">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Address */}
        <div>
          <h1 className="text-3xl font-bold text-red-600">KT-MART</h1>
          <p className="text-red-500 font-semibold text-lg"></p>
          <p className="text-gray-700 mt-4 text-sm leading-6">
           Bicholi Marda Road , <br />
            Indore ,452016
          </p>
        </div>

        {/* Need Help */}
        <div>
          <h2 className="font-bold text-lg mb-3">Need Help</h2>
          <p className="flex items-center gap-2 text-gray-700 text-sm">
            <Headphones className="w-5 h-5 text-green-600" />
            7305393222 / 04443666333
          </p>
          <p className="flex items-center gap-2 mt-2 text-gray-700 text-sm">
            <Mail className="w-5 h-5 text-gray-600" />
           ktmarthelp@mart.com
          </p>
        </div>

        {/* Categories */}
        <div>
          <h2 className="font-bold text-lg mb-3">Categories</h2>
          <div className="flex flex-wrap gap-2 text-sm text-gray-600">
            {[
              "Fruits & Vegetables",
              "Staples",
              "Snacks & Namkeens",
              "Beverages",
              "Chilled & Dairy Foods",
              "Ready To Cook",
              "Ready To Eat",
              "Baby Care",
              "Household Essentials",
              "Cleaning Needs",
              "Feminine Care",
              "Health Care",
              "Personal Care",
              "Stationaries",
              "Skin Care",
              "Oral Care",
              "Men's Grooming",
              "Creams & Lotions",
              "Crockeries",
            ].map((item, i) => (
              <span
                key={i}
                className="hover:text-red-500 cursor-pointer whitespace-nowrap"
              >
                {item} |
              </span>
            ))}
          </div>
        </div>

        {/* Links & App */}
        <div>
          <h2 className="font-bold text-lg mb-3">Links</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">Deals</li>
            <li className="hover:text-red-500 cursor-pointer">New Arrivals</li>
          </ul>

          <h2 className="font-bold text-lg mt-6 mb-3">Download Our App</h2>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-3 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
              <FaGooglePlay /> Google Play
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
              <FaApple /> App Store
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-center text-sm text-gray-600 px-4">
        <p className="leading-6">
          Privacy Policy | Refund Policy | Shipping Policy | Terms and Condition
        </p>
        <p className="mt-2">
          Copyright © 2025 Pothys Mart. All Right Reserved
        </p>
      </div>

      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-20 right-5">
        <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 text-sm sm:text-base">
          <FaWhatsapp className="w-5 h-5" /> Click to chat
        </button>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-5 right-5">
        <button
          onClick={scrollToTop}
          className="p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 text-lg"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
