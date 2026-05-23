import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Student Management System
        </h1>

        <p className="mt-4">
          Final Exam Project Using Next.js
        </p>

        <div className="mt-6">
          <Link
            href="/login"
            className="rounded bg-black px-6 py-3 text-white"
          >
            Go To Login
          </Link>
        </div>
      </div>
    </main>
  );
}