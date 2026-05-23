"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import { login } from "@/services/auth.service";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async () => {
    try {
      await login(
        username,
        password
      );

      toast.success(
        "Login successful"
      );

      router.push("/otp");
    } catch (error) {
      console.error(error);

      toast.error(
        "Invalid username or password"
      );
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded border p-6">
        <h1 className="mb-6 text-3xl font-bold">
          Login
        </h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            className="w-full border p-3"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border p-3"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-black p-3 text-white"
        >
          Login
        </button>
      </div>
    </main>
  );
}