interface EmptyStateProps {
  /** Message to display when there are no countries to show */
  message?: string;
}
export default function EmptyState({
  message = "No countries found.",
}: EmptyStateProps) {
  return <p>{message}</p>;
}
