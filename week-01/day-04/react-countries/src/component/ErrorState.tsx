interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}
export default function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
      <p>Error: {message}</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
}
