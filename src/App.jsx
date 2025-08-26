import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Grocery from "./pages/Grocery";
import PackagedFood from "./pages/PackagedFoods/PackagedFood";
import BreakFastt from "./pages/PackagedFoods/BreakFastt";
import Chocolatess from "./pages/PackagedFoods/Chocolatess";
import Pasta from "./pages/Pasta";
import Jamss from "./pages/PackagedFoods/Jamss";
import Sweet from "./pages/PackagedFoods/Sweet";

// Temporary Login Page (you can style later)
const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">Login Page</h1>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      {/* Navbar visible on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />
        {/* Future pages */}
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/snacks&drinks" element={<PackagedFood />} />
        <Route path="/breakfast" element={<BreakFastt />} />
        <Route path="/chocolates" element={<Chocolatess/>} />
        <Route path="/pastaa" element={<Pasta/>} />
        <Route path="/jamss" element={<Jamss/>} />
        <Route path="/sweets" element={<Sweet/>} />
      </Routes>
    </Router>
  );
};

export default App;
