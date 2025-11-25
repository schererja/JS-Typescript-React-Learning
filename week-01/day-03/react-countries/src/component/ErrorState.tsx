export default function ErrorState({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
      <p>Error: {message}</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
}
