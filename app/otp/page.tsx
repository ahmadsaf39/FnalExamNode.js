"use client";

import { useState } from "react";

export default function OtpPage() {
  const [otp, setOtp] = useState("");

  const handleVerifyOtp = () => {
    console.log(otp);
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded border p-6">
        <h1 className="mb-6 text-3xl font-bold">
          OTP Verification
        </h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter OTP Code"
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value)
            }
            className="w-full border p-3"
          />
        </div>

        <button
          onClick={handleVerifyOtp}
          className="w-full bg-black p-3 text-white"
        >
          Verify OTP
        </button>
      </div>
    </main>
  );
}