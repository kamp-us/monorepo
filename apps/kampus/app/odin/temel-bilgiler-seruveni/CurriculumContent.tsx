import { Card, Flex, Link, Text } from "@radix-ui/themes";

import { type Section } from "../curriculum-list";

interface CurriculumSectionProps {
  section: Section;
}

export const CurriculumSection = (props: CurriculumSectionProps & { curriculumUrl: string }) => {
  const { lessons, header } = props.section;
  const { curriculumUrl } = props;
  return (
    <Flex direction="column" gap="4">
      <Card size="3" variant="classic">
        <Flex gap="4" direction="column">
          <Text size="6">{header}</Text>
          {lessons.map((lesson, index) => {
            const { title, url } = lesson;
            const color = url === "#" ? "orange" : "teal";
            return (
              <Card color={color} size="1" key={index}>
                <Link color={color} href={url === "#" ? "#" : `${curriculumUrl}/${url}`}>
                  {title}
                </Link>
              </Card>
            );
          })}
        </Flex>
      </Card>
    </Flex>
  );
};
