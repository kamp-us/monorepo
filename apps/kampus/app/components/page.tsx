import { Button, Input, InputWithButton } from "@kampus/ui-next";
import { Search } from "lucide-react";

const ComponentsPage = () => {
  return (
    <div className="flex flex-col w-full p-10 space-y-4">
      <h1>Custom components</h1>
      <div className="flex flex-col w-full  space-y-4">
        <div>
          <h2>Input with button</h2>
          <InputWithButton
            input={<Input placeholder="Arama yap" />}
            button={
              <Button type="submit">
                <Search />
              </Button>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;
