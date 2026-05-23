"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRole: string;
}

export default function RoleGuard({
  children,
  allowedRole,
}: RoleGuardProps) {
  const router = useRouter();

  useEffect(() => {
    const role =
      localStorage.getItem("role");

    if (role !== allowedRole) {
      router.push("/dashboard");
    }
  }, [allowedRole, router]);

  return <>{children}</>;
}