const students = [
  {
    id: 1,
    name: "Ahmad",
    email: "ahmad@test.com",
  },
  {
    id: 2,
    name: "Ali",
    email: "ali@test.com",
  },
];

export default function StudentsPage() {
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
          </div>
        ))}
      </div>
    </div>
  );
}