import { Loader2 } from "lucide-react";

interface Props {
  size: number;
}

export const Loading = (props: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Loader2 className="animate-spin" size={props.size} />
      Loading...
    </div>
  );
};
