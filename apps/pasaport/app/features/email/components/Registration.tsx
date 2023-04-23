import { Link } from "@react-email/link";
import { Text } from "@react-email/text";
import type { FC } from "react";
import { Email, EmailHeading, EmailPreview } from "./Email";

interface EmailProps {
  code: string;
  magicLink?: string;
}

export const Registration: FC<EmailProps> = ({ code, magicLink }) => {
  return (
    <Email
      heading={<EmailHeading>Selam!</EmailHeading>}
      preview={<EmailPreview>kamp.us'e hoşgeldin</EmailPreview>}
    >
      {magicLink && (
        <Link
          href={magicLink}
          target="_blank"
          style={{
            ...link,
            display: "block",
            marginBottom: "16px",
          }}
        >
          Giriş yapmak icin tikla
        </Link>
      )}
      <Text style={{ ...text, marginBottom: "14px" }}>
        Ya da asagidaki giris kodunu kopyala
      </Text>
      <code style={codeStyles}>{code}</code>
      <Text
        style={{
          ...text,
          color: "#ababab",
          marginTop: "14px",
          marginBottom: "16px",
        }}
      >
        eger sen degilsen de sal, basina bi sey gelmez
      </Text>
    </Email>
  );
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const codeStyles = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
