interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({
  message,
}: ErrorMessageProps) {
  return (
    <div className="rounded border border-red-500 bg-red-100 p-4 text-red-700">
      {message}
    </div>
  );
}