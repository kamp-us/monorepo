export default function PanoLayout({ children }: { children: React.ReactNode }) {
  return (
    <section aria-label="PanoLayout">
      <div className="container mx-auto max-w-5xl py-10">{children}</div>
    </section>
  );
}
