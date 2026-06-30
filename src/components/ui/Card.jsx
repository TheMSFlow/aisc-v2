export default function Card({
  as: Tag = "div",
  highlight = false,
  className = "",
  children,
}) {
  return (
    <Tag
      className={`border p-6 ${
        highlight
          ? "border-warning/30 bg-white/8"
          : "border-white/10 bg-white/4"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
