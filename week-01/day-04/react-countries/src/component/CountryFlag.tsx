interface CountryFlagProps {
  srcUrl: string;
  name: string;
}
export default function CountryFlag({ srcUrl, name }: CountryFlagProps) {
  return (
    <img
      src={srcUrl}
      alt={`Flag of ${name}`}
      width="50%"
      style={{ marginRight: "10px" }}
      loading="lazy"
    />
  );
}
