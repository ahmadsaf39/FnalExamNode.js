export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-black border-t-transparent" />
    </div>
  );
}