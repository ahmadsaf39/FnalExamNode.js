export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b p-4">
      <h1 className="text-2xl font-bold">
        Student Management System
      </h1>

      <button className="bg-red-500 px-4 py-2 text-white">
        Logout
      </button>
    </header>
  );
}