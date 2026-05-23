import "./globals.css";

import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Student Management System",
  description:
    "Next.js Final Exam Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" />

        {children}
      </body>
    </html>
  );
}