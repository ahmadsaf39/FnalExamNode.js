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
        onClick={onSubmit}
        className="bg-black px-4 py-2 text-white"
      >
        Add Student
      </button>
    </div>
  );
}