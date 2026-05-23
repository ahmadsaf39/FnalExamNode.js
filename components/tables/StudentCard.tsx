"use client";

import { useState } from "react";

interface StudentCardProps {
  id: number;
  name: string;
  email: string;

  onDelete: (id: number) => void;

  onEdit: (
    id: number,
    name: string,
    email: string
  ) => void;
}

export default function StudentCard({
  id,
  name,
  email,
  onDelete,
  onEdit,
}: StudentCardProps) {
  const [editName, setEditName] =
    useState(name);

  const [editEmail, setEditEmail] =
    useState(email);

  const [isEditing, setIsEditing] =
    useState(false);

  const role =
    localStorage.getItem("role");

  return (
    <div className="rounded border p-4">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editName}
            onChange={(e) =>
              setEditName(
                e.target.value
              )
            }
            className="mb-2 w-full border p-2"
          />

          <input
            type="email"
            value={editEmail}
            onChange={(e) =>
              setEditEmail(
                e.target.value
              )
            }
            className="mb-2 w-full border p-2"
          />

          <button
            onClick={() => {
              onEdit(
                id,
                editName,
                editEmail
              );

              setIsEditing(false);
            }}
            className="mr-2 bg-black px-4 py-2 text-white"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <h2 className="font-bold">
            {name}
          </h2>

          <p>{email}</p>

          {role === "Admin" && (
            <div className="mt-4 flex gap-2">
              <button
                onClick={() =>
                  setIsEditing(true)
                }
                className="bg-blue-500 px-4 py-2 text-white"
              >
                Edit
              </button>

              <button
                onClick={() =>
                  onDelete(id)
                }
                className="bg-red-500 px-4 py-2 text-white"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}