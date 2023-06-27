import type { FC, PropsWithChildren, ReactNode } from "react";
import { Body, Container, Head, Heading, Html, Preview, Tailwind } from "@react-email/components";

import { kampusPreset } from "@kampus/tailwind";

interface EmailProps {
  preview: ReactNode;
  heading: ReactNode;
}

type PropsWithStringChildren<T = object> = T & { children: string };

export const EmailPreview = ({ children }: PropsWithStringChildren) => {
  return <Preview>{children}</Preview>;
};

export const EmailHeading: FC<{ children: string }> = ({ children }) => {
  return <Heading>{children}</Heading>;
};

export const Email = ({ heading, preview, children }: PropsWithChildren<EmailProps>) => {
  return (
    <Html>
      <Head />
      {preview}
      <Tailwind config={kampusPreset}>
        <Body style={main}>
          <Container style={container}>
            {heading}
            {children}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const main = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {};
