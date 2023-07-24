export default function FiltersLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section className="bg-amber-500">{children}</section>;
}
