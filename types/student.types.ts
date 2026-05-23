export interface Student {
  id: number;
  name: string;
  email: string;
}

export interface CreateStudentRequest {
  name: string;
  email: string;
}