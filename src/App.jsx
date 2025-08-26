import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import OTPLogin from "./pages/OTPLogin.jsx";
import Ghee from './pages/Grocery/gheeandvanaspati/ghee.jsx';

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
        {/* Homepage */}
        <Route path="/" element={<Hero />} />

        {/* Login Page */}
        <Route path="/login" element={<OTPLogin/>} />
        {/* <Route path="/ghee" element={<Ghee/>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
