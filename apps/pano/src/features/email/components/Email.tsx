import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Html } from "@react-email/html";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import type { FC, ReactNode } from "react";

interface EmailProps {
  preview: ReactNode;
  heading: ReactNode;
}

export const EmailPreview: FC<{ children: string }> = ({ children }) => {
  return <Preview>{children}</Preview>;
};

export const EmailHeading: FC = ({ children }) => {
  return <Heading style={h1}>{children}</Heading>;
};

export const Email: FC<EmailProps> = ({ heading, preview, children }) => {
  return (
    <Html>
      <Head />
      {preview}
      <Section style={main}>
        <Container style={container}>
          {heading}
          {children}
        </Container>
      </Section>
    </Html>
  );
};

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};
