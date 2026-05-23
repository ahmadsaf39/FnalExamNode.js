"use client";

import toast from "react-hot-toast";

interface AddStudentFormProps {
  name: string;
  email: string;

  setName: (value: string) => void;

  setEmail: (value: string) => void;

  onSubmit: () => void;
}

export default function AddStudentForm({
  name,
  email,
  setName,
  setEmail,
  onSubmit,
}: AddStudentFormProps) {
  const handleSubmit = () => {
    if (!name.trim()) {
      toast.error(
        "Name is required"
      );

      return;
    }

    if (!email.trim()) {
      toast.error(
        "Email is required"
      );

      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error(
        "Invalid email format"
      );

      return;
    }

    onSubmit();
  };

  return (
    <div className="mb-6 rounded border p-4">
      <h2 className="mb-4 text-xl font-bold">
        Add Student
      </h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full border p-3"
        />
      </div>

      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border p-3"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-black px-4 py-2 text-white"
      >
        Add Student
      </button>
    </div>
  );
}