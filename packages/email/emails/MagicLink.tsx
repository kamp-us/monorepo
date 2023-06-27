import { Link, Text } from "@react-email/components";
import { z } from "zod";

import { Email, EmailHeading, EmailPreview } from "../components/Email";

export const magicLinkSchema = z.object({
  url: z.string(),
});

export interface MagicLinkProps {
  url: string;
}

export const MagicLink = ({ url = "https://pasaport.kamp.us/magic-link" }: MagicLinkProps) => {
  return (
    <Email
      heading={<EmailHeading>Selam!</EmailHeading>}
      preview={<EmailPreview>kamp.us&apos;e hoşgeldin</EmailPreview>}
    >
      <div className="flex flex-col gap-4">
        {url && (
          <Link href={url} target="_blank" className="font-sans text-sm text-purple-700 underline">
            kamp.us&apos;e giriş yapmak icin tıkla
          </Link>
        )}
        <Text className="m-0 text-gray-300">eğer sen değilsen discorddan ulaş bize</Text>
      </div>
    </Email>
  );
};

export default MagicLink;
