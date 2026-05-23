interface StudentCardProps {
  id: number;
  name: string;
  email: string;
  onDelete: (id: number) => void;
}

export default function StudentCard({
  id,
  name,
  email,
  onDelete,
}: StudentCardProps) {
  return (
    <div className="rounded border p-4">
      <h2 className="font-bold">
        {name}
      </h2>

      <p>{email}</p>

      <button
        onClick={() => onDelete(id)}
        className="mt-4 bg-red-500 px-4 py-2 text-white"
      >
        Delete
      </button>
    </div>
  );
}