import { curriculumList } from "../curriculum-list";

interface MufredatPageProps {
  journey: string;
}

export default function Curriculum(props: MufredatPageProps) {
  const { journey } = props;
  console.log(curriculumList);
  return (
    <div>
      {journey}
      <h1>Hello</h1>
    </div>
  );
}
