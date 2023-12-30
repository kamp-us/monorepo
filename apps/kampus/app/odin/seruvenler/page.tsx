import { Flex } from "@radix-ui/themes";

import { HelpNeededJourney, Journey } from "./Journey";

const paths = [
  {
    title: "Temel Bilgiler Serüveni",
    description:
      "İşte her şeyin başladığı yer! Gerçek, çalışan web siteleri oluşturmak için ihtiyacınız olan temel araçların hepsine pratik bir giriş. Web geliştiricilerinin aslında ne yaptığını ve sonraki kurslar için ihtiyacınız olan temelleri öğreneceksiniz.",
    enabled: true,
    url: "/odin/temel-bilgiler-seruveni",
  },
  {
    title: "Full Stack JavaScript Serüveni",
    description: `Bu yolculuk, sizi JavaScript müfredatımızın tamamından geçirir. 
      Kurslar, görüntülendikleri sırayla alınmalıdır. 
      JavaScript ve NodeJS kullanarak sıfırdan güzel, duyarlı web siteleri oluşturmak 
      için bilmeniz gereken her şeyi öğreneceksiniz.`,
    enabled: false,
    url: "https://github.com/kamp-us/monorepo/tree/dev/content/odin/intermediate_html_css",
  },
];

export default function SeruvenlerPage() {
  return (
    <Flex direction="column" gap="4">
      {paths.map((path) =>
        path.enabled ? (
          <Journey
            key={path.title}
            title={path.title}
            description={path.description}
            url={path.url}
          />
        ) : (
          <HelpNeededJourney
            key={path.title}
            title={path.title}
            description={path.description}
            url={path.url}
          />
        )
      )}
    </Flex>
  );
}
