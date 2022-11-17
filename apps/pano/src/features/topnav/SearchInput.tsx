import { Button, ControlGroup, Form, Input, Select } from "@kampus/ui";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import type { FC } from "react";
const hasCollections = () => false;

export const SearchInput: FC = () => {
  return (
    <Form
      method="get"
      action="/search"
      css={{ display: "flex", justifyContent: "center" }}
    >
      <ControlGroup css={{ flex: 1, maxWidth: 400 }}>
        {hasCollections() && (
          <Select size="2">
            <option>Gönderi</option>
            <option>Koleksiyon</option>
          </Select>
        )}
        <Input name="q" size="2" placeholder="Arama yap" />
        <Button size="2" type="submit">
          <MagnifyingGlassIcon />
        </Button>
      </ControlGroup>
    </Form>
  );
};
