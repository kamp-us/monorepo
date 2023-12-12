import { MainNav, MainNavBrand } from "~/features/main-nav";

export default function PanoLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <MainNav brand={<MainNavBrand href="/pano">pano</MainNavBrand>} />
      <section
        aria-label="PanoLayout"
        role="contentinfo"
        className="bg-background container mx-auto max-w-5xl py-10"
      >
        {children}
        {modal}
      </section>
    </>
  );
}
