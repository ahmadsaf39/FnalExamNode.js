import {
  Student,
  CreateStudentRequest,
} from "@/types/student.types";

const STORAGE_KEY = "students";

export const getStudents =
  async (): Promise<Student[]> => {
    const students =
      localStorage.getItem(
        STORAGE_KEY
      );

    return students
      ? JSON.parse(students)
      : [];
  };

export const createStudent =
  async (
    studentData: CreateStudentRequest
  ) => {
    const students =
      await getStudents();

    const newStudent: Student = {
      id: Date.now(),

      name: studentData.name,

      email: studentData.email,
    };

    const updatedStudents = [
      ...students,
      newStudent,
    ];

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedStudents)
    );

    return newStudent;
  };

export const updateStudent =
  async (
    studentId: number,
    studentData: CreateStudentRequest
  ) => {
    const students =
      await getStudents();

    const updatedStudents =
      students.map((student) =>
        student.id === studentId
          ? {
              ...student,
              ...studentData,
            }
          : student
      );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedStudents)
    );

    return updatedStudents;
  };

export const deleteStudent =
  async (studentId: number) => {
    const students =
      await getStudents();

    const updatedStudents =
      students.filter(
        (student) =>
          student.id !== studentId
      );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedStudents)
    );

    return updatedStudents;
  };