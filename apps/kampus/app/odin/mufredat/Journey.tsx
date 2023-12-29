"use client";

import { ExternalLinkIcon, FileTextIcon, RocketIcon } from "@radix-ui/react-icons";
import { Button, Callout, Card, Flex, Heading, Separator, Text } from "@radix-ui/themes";

interface JourneyProps {
  title: string;
  description: string;
}

export const Journey = (props: JourneyProps) => {
  const { title, description } = props;
  return (
    <Card size="5">
      <Flex direction="column" gap="6">
        <Flex align="center" justify="between">
          <Heading size="8">{title}</Heading>
          <Button variant="soft" size="2">
            <FileTextIcon />
            Dersleri incele
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

interface HelpNeededJourneyProps {
  title: string;
  description: string;
}

export const HelpNeededJourney = (props: HelpNeededJourneyProps) => {
  const { title, description } = props;
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
          <Flex align="center" gap="2">
            <Heading size="8">{title}</Heading>
            <Text as="p" color="gray" size="2">
              Çeviriye ihtiyaç duyuluyor!
            </Text>
          </Flex>
          <Flex gap="2">
            <Button variant="soft" size="2">
              <ExternalLinkIcon />
              Katkıda bulun
            </Button>
            <Button variant="soft" size="2">
              <FileTextIcon />
              Dersleri incele
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
