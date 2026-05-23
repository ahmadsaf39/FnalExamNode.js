"use client";

import { useEffect, useState } from "react";

import {
  getStudents,
  deleteStudent,
} from "@/services/student.service";

interface Student {
  id: number;
  name: string;
  email: string;
}

export default function StudentsPage() {
  const [students, setStudents] =
    useState<Student[]>([]);

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

  useEffect(() => {
  async function fetchStudents() {
    try {
      const data = await getStudents();

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

      <div className="space-y-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="rounded border p-4"
          >
            <h2 className="font-bold">
              {student.name}
            </h2>

            <p>{student.email}</p>

            <button
              onClick={() =>
                handleDelete(student.id)
              }
              className="mt-4 bg-red-500 px-4 py-2 text-white"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}