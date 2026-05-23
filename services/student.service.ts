import api from "./api";

export const getStudents = async () => {
  const response = await api.get(
    "/students"
  );

  return response.data;
};

export const createStudent = async (
  studentData: {
    name: string;
    email: string;
  }
) => {
  const response = await api.post(
    "/students",
    studentData
  );

  return response.data;
};

export const updateStudent = async (
  studentId: number,
  studentData: {
    name: string;
    email: string;
  }
) => {
  const response = await api.put(
    `/students/${studentId}`,
    studentData
  );

  return response.data;
};

export const deleteStudent = async (
  studentId: number
) => {
  const response = await api.delete(
    `/students/${studentId}`
  );

  return response.data;
};