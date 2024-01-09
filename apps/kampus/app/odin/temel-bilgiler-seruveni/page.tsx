import { Flex, Text } from "@radix-ui/themes";

import curriculumList from "../curriculum-list";
import { CurriculumSection } from "./CurriculumContent";

export default function TemelBilgilerSeruveni() {
  const { curriculum } = curriculumList;

  return (
    <div>
      {curriculum.map((cur, index) => (
      <Flex direction="column" gap="6">
        <Flex gap="4" align="center">
          <Text size="8">{cur.name}</Text>
          <Text size="2" color="gray">
            {cur.sections.length} bölüm
          </Text>
        </Flex>
        <Text size="4">{cur.description}</Text>
        {cur.sections.map((section, sectionIndex) => {
          return <CurriculumSection curriculumUrl={cur.url} key={sectionIndex} section={section} />;
        })}
        </Flex>
        ))}
    </div>
  );
}
