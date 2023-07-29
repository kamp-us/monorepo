import Link from "next/link";

type PanoLinkTypes = "external" | "internal";

interface PanoLinkProps {
  href: string;
  title: string;
  variant?: PanoLinkTypes;
}

export const PanoLink = ({ href, title, variant = "internal" }: PanoLinkProps) => {
  // TODO: Differentiate between internal and external links with css

  if (variant === "external") {
    return (
      <a className="text-primary" href={href}>
        {title}
      </a>
    );
  }

  const css = "text-muted-foreground hover:underline";
  return (
    <Link className={css} href={href}>
      {title}
    </Link>
  );
};
