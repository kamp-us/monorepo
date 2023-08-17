export default function PanoLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <section
      aria-label="PanoLayout"
      role="contentinfo"
      className="bg-background container mx-auto max-w-5xl py-10"
    >
      {children}
      {modal}
    </section>
  );
}
