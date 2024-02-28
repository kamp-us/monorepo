import { Flex } from "@radix-ui/themes";

import curriculumList from "../curriculum-list";
import { HelpNeededJourney, Journey } from "./Journey";

const paths = Object.values(curriculumList).map((curriculum) => {
  return {
    title: curriculum.name,
    description: curriculum.description,
    enabled: curriculum.enabled,
    url: curriculum.url,
  };
});

export default function SeruvenlerPage() {
  return (
    <Flex direction="column" gap="4" my="4">
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
