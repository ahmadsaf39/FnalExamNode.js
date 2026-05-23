"use client";

import RoleGuard from "@/components/auth/RoleGuard";

const users = [
  {
    id: 1,
    username: "admin",
    role: "Admin",
  },
  {
    id: 2,
    username: "user1",
    role: "User",
  },
];

export default function UsersPage() {
  return (
    <RoleGuard allowedRole="Admin">
      <div>
        <h1 className="mb-6 text-3xl font-bold">
          Users
        </h1>

        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="rounded border p-4"
            >
              <h2 className="font-bold">
                {user.username}
              </h2>

              <p>{user.role}</p>
            </div>
          ))}
        </div>
      </div>
    </RoleGuard>
  );
}