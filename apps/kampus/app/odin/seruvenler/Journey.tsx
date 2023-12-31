"use client";

import { ExternalLinkIcon, FileTextIcon, RocketIcon } from "@radix-ui/react-icons";
import { Button, Callout, Card, Flex, Heading, Link, Separator, Text } from "@radix-ui/themes";

interface JourneyProps {
  title: string;
  description: string;
  url: string;
}

export const Journey = (props: JourneyProps) => {
  const { title, description, url } = props;
  return (
    <Card size="5">
      <Flex direction="column" gap="6">
        <Flex align="center" justify="between">
          <Heading size="8">{title}</Heading>
          <Flex direction="column" gap="1">
            <Button variant="soft" size="2">
              <FileTextIcon />
              <Link className="flex items-center" href={url}>
                Dersleri incele
              </Link>
            </Button>
          </Flex>
        </Flex>
        <Separator size="4" />
        <Flex>
          <Text>{description}</Text>
        </Flex>
      </Flex>
    </Card>
  );
};

interface HelpNeededJourneyProps {
  title: string;
  description: string;
  url: string;
}

export const HelpNeededJourney = (props: HelpNeededJourneyProps) => {
  const { title, description, url } = props;
  return (
    <Card size="5">
      <Flex direction="column" gap="6">
        <Callout.Root variant="outline">
          <Callout.Icon>
            <RocketIcon />
          </Callout.Icon>
          <Callout.Text>
            Çeviri yaparak katkıda bulunun! Odin Project&apos;in daha fazla insanın anlayabilmesine
            yardımcı olun.
          </Callout.Text>
        </Callout.Root>
        <Flex align="center" justify="between">
          <Flex direction="column" gap="1">
            <Heading size="8">{title}</Heading>
            <Text as="p" color="gray" size="2">
              Çeviriye ihtiyaç duyuluyor!
            </Text>
          </Flex>
          <Button variant="soft" size="2">
            <ExternalLinkIcon />
            <Link target="_blank" href={url}>
              Katkıda bulun
            </Link>
          </Button>
        </Flex>
        <Separator size="4" />
        <Flex>
          <Text>{description}</Text>
        </Flex>
      </Flex>
    </Card>
  );
};
