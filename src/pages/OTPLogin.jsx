import React, { useState } from "react";

const OTPLogin = () => {
  const [step, setStep] = useState("mobile"); // mobile | otp
  const [mobile, setMobile] = useState("");
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [enteredOTP, setEnteredOTP] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(true); // popup visible on home by default

  // Generate OTP (4-digit random)
  const generateOTP = () => {
    if (mobile.length !== 10) {
      setMessage("Enter a valid 10-digit mobile number!");
      return;
    }
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOTP(otp);
    setStep("otp");
    setMessage(`OTP sent to ${mobile} (For demo: ${otp})`);
  };

  // Verify OTP
  const verifyOTP = () => {
    if (enteredOTP === generatedOTP) {
      setMessage("✅ Login Successful!");
    } else {
      setMessage("❌ Invalid OTP, try again!");
    }
  };

  if (!isOpen) return null; // hide popup if closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blur bg-opacity-50 z-50">
      <div className="w-[90%] max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-6 relative">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-center text-gray-700">
          Login with OTP
        </h2>

        {step === "mobile" && (
          <div className="space-y-4">
            <input
              type="number"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={generateOTP}
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Get OTP
            </button>
          </div>
        )}

        {step === "otp" && (
          <div className="space-y-4">
            <input
              type="number"
              placeholder="Enter OTP"
              value={enteredOTP}
              onChange={(e) => setEnteredOTP(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              onClick={verifyOTP}
              className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Verify OTP
            </button>
          </div>
        )}

        {message && (
          <p className="text-center text-sm font-medium text-gray-700">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default OTPLogin;
