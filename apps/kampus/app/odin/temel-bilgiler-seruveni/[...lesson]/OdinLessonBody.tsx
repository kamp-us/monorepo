import { graphql, useFragment } from "react-relay";
import { useEffect, useState } from 'react';
import { type OdinLessonBody_body$key } from "./__generated__/OdinLessonBody_body.graphql";

interface Props {
  body: OdinLessonBody_body$key | null;
}

const useOdinLessonBodyFragment = (key: OdinLessonBody_body$key | null) =>
  useFragment(
    graphql`
      fragment OdinLessonBody_body on OdinLessonBody {
        html
      }
    `,
    key
  );

export const OdinLessonBody = (props: Props) => {
  const body = useOdinLessonBodyFragment(props.body);
  const [subtitles, setSubtitles] = useState<{ id: string, text: string }[]>([]);

  useEffect(() => {
    if (body?.html) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(body.html, 'text/html');
      const h3Elements = doc.querySelectorAll('h3');
      const h3Texts = Array.from(h3Elements).map(h3 => ({ id: h3.id, text: h3.textContent || '' }));
      setSubtitles(h3Texts);
    }
  }, [body?.html]);

  return (
    <div className="flex flex-row justify-center xl:justify-between">
      <div
        className="prose dark:prose-invert hover:prose-a:text-blue-500"
        dangerouslySetInnerHTML={{ __html: body?.html ?? "" }}
      >    
      </div>
      <div className="hidden xl:block">
        
          <div className="sticky top-20 pb-20">
            <h3 className="text-md pb-4 prose dark:prose-invert hover:prose-a:text-blue-500">Ders içeriği</h3>

            <ul className="border-l-4 ltr:ml:3">
            {subtitles.map((subtitle, index) => (
              <li className="p-2 pl-4" key={index}>
                <a href={`#${subtitle.text}`}>
                  {subtitle.text}
                </a>
              </li>
            ))}
            </ul>
          </div>
      </div>
    </div>
  
  );
};
