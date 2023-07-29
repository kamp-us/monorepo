import Link from "next/link";

type PanoLinkTypes = "external" | "internal";

interface PanoLinkProps {
  href: string;
  title: string;
  variant?: PanoLinkTypes;
}

export const PanoLink = ({ href, title, variant = "internal" }: PanoLinkProps) => {
  // TODO: Differentiate between internal and external links with css
  const css = "text-secondary-foreground hover:text-primary-foreground";

  if (variant === "external") {
    return (
      <a className={css} href={href}>
        {title}
      </a>
    );
  }

  return (
    <Link className={css} href={href}>
      {title}
    </Link>
  );
};
