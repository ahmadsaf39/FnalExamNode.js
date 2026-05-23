import "./globals.css";

export const metadata = {
  title: "Student Management System",
  description: "Next.js Final Exam Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}