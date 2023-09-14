import { useRef } from "react";

export const useJigsawImage = (id: string, image: string) => {
  const imageRef = useRef<HTMLImageElement>(null);

  return <img ref={imageRef} id={id} src={image} alt="Jigsaw" />;
};
