export default function CountryFlag({
  srcUrl,
  name,
}: {
  srcUrl: string;
  name: string;
}) {
  return (
    <img
      src={srcUrl}
      alt={`Flag of ${name}`}
      width="100%"
      style={{ marginRight: "10px" }}
    />
  );
}
