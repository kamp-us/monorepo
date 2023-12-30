import { Flex, Text } from "@radix-ui/themes";

import curriculumList from "../curriculum-list";
import { CurriculumSection } from "./CurriculumContent";

export default function TemelBilgilerSeruveni() {
  const { description, sections } = curriculumList.foundationsCurriculum;

  return (
    <div>
      <Flex direction="column" gap="6">
        <Flex gap="4" align="center">
          <Text size="8">Temel Bilgiler Serüveni</Text>
          <Text size="2" color="gray">
            {sections.length} bölüm
          </Text>
        </Flex>
        <Text size="4">{description}</Text>
        {sections.map((section, index) => {
          return <CurriculumSection key={index} section={section} />;
        })}
      </Flex>
    </div>
  );
}
