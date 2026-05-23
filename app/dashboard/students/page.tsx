"use client";

import { useEffect, useState } from "react";

import StudentCard from "@/components/tables/StudentCard";
import AddStudentForm from "@/components/forms/AddStudentForm";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import ErrorMessage from "@/components/ui/ErrorMessage";

import {
  getStudents,
  deleteStudent,
  createStudent,
} from "@/services/student.service";

import {
  Student,
  CreateStudentRequest,
} from "@/types/student.types";

export default function StudentsPage() {
  const [students, setStudents] =
    useState<Student[]>([]);

  const [name, setName] = useState("");

  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const loadStudents = async () => {
    try {
      setLoading(true);

      const data = await getStudents();

      setStudents(data);
    } catch (error) {
      console.error(error);

      setError(
        "Failed to load students"
      );
    } finally {
      setLoading(false);
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

      setError(
        "Failed to delete student"
      );
    }
  };

  const handleCreateStudent =
    async () => {
      try {
        const studentData: CreateStudentRequest =
          {
            name,
            email,
          };

        await createStudent(
          studentData
        );

        setName("");
        setEmail("");

        loadStudents();
      } catch (error) {
        console.error(error);

        setError(
          "Failed to create student"
        );
      }
    };

  useEffect(() => {
  async function fetchStudents() {
    try {
      setLoading(true);

      const data =
        await getStudents();

      setStudents(data);
    } catch (error) {
      console.error(error);

      setError(
        "Failed to load students"
      );
    } finally {
      setLoading(false);
    }
  }

  fetchStudents();
}, []);
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        Students
      </h1>

      {error && (
        <div className="mb-4">
          <ErrorMessage
            message={error}
          />
        </div>
      )}

      <AddStudentForm
        name={name}
        email={email}
        setName={setName}
        setEmail={setEmail}
        onSubmit={
          handleCreateStudent
        }
      />

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