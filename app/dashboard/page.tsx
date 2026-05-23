"use client";

export default function DashboardPage() {
  const role =
    localStorage.getItem("role");

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Welcome to {role} Dashboard
      </h1>
    </div>
  );
}