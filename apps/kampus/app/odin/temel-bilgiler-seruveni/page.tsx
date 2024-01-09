import { Flex, Text } from "@radix-ui/themes";

import curriculumList from "../curriculum-list";
import { CurriculumSection } from "./CurriculumContent";

export default function TemelBilgilerSeruveni() {
  const { curriculum } = curriculumList;
  const temelBilgiler = curriculum[0]

  return (
    <div className="my-10">
      <Flex direction="column" gap="6">
        <Flex gap="4" align="center">
          <Text size="8">{temelBilgiler?.name}</Text>
          <Text size="2" color="gray">
            {temelBilgiler?.sections.length} bölüm
          </Text>
        </Flex>
        <Text size="4">{temelBilgiler?.description}</Text>
        {temelBilgiler?.sections.map((section, sectionIndex) => {
          return <CurriculumSection curriculumUrl={temelBilgiler?.url} key={sectionIndex} section={section} />;
        })}
        </Flex>
    </div>
  )
}
