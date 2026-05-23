"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { verifyOtp } from "@/services/auth.services";

export default function OtpPage() {
  const router = useRouter();

  const [otp, setOtp] = useState("");

  const handleVerifyOtp = async () => {
    try {
      const data = await verifyOtp(otp);

      console.log(data);

      localStorage.setItem(
        "token",
        data.accessToken
      );

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
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
            placeholder="Enter OTP"
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