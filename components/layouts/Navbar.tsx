"use client";

import { useRouter } from "next/navigation";

import { removeToken } from "@/utils/helper";
import { ROUTES } from "@/utils/constant";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    removeToken();

    localStorage.removeItem("role");

    router.push(ROUTES.LOGIN);
  };

  return (
    <header className="flex items-center justify-between border-b p-4">
      <h1 className="text-2xl font-bold">
        Student Management System
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 text-white"
      >
        Logout
      </button>
    </header>
  );
}