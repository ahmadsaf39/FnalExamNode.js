import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r p-6">
        <h2 className="mb-6 text-2xl font-bold">
          Dashboard
        </h2>

        <nav className="flex flex-col gap-4">
          <Link href="/dashboard">
            Home
          </Link>

          <Link href="/dashboard/students">
            Students
          </Link>

          <Link href="/dashboard/users">
            Users
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}