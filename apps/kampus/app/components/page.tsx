import { Search } from "lucide-react";

import { Button, Input, InputWithButton } from "@kampus/ui-next";

const ComponentsPage = () => {
  return (
    <div className="flex w-full flex-col space-y-4 p-10">
      <h1>Custom components</h1>
      <div className="flex w-full flex-col  space-y-4">
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
