"use client";

import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log({
      username,
      password,
    });
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