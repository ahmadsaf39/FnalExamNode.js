"use client";

import { useEffect, useState } from "react";

import StudentCard from "@/components/tables/StudentCard";

import {
  getStudents,
  deleteStudent,
  createStudent,
} from "@/services/student.service";

interface Student {
  id: number;
  name: string;
  email: string;
}

export default function StudentsPage() {
  const [students, setStudents] =
    useState<Student[]>([]);

  const [name, setName] = useState("");

  const [email, setEmail] =
    useState("");

  const loadStudents = async () => {
    try {
      const data = await getStudents();

      setStudents(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (
    id: number
  ) => {
    try {
      await deleteStudent(id);

      loadStudents();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateStudent =
    async () => {
      try {
        await createStudent({
          name,
          email,
        });

        setName("");
        setEmail("");

        loadStudents();
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    async function fetchStudents() {
      try {
        const data =
          await getStudents();

        setStudents(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchStudents();
  }, []);

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        Students
      </h1>

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
          onClick={handleCreateStudent}
          className="bg-black px-4 py-2 text-white"
        >
          Add Student
        </button>
      </div>

      <div className="space-y-4">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            email={student.email}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}