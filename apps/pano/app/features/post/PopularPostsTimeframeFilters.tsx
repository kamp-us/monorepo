import {
  DropdownMenu,
  DropdownMenuTrigger,
  OldButton,
  DropdownMenuContent,
} from "@kampus/ui";
import { Form, useLocation, useNavigation } from "@remix-run/react";
import { useEffect, useState } from "react";

export const TIME_FRAMES = [
  { text: "Now", value: "now" },
  { text: "Today", value: "today" },
  { text: "This Week", value: "week" },
  { text: "This Month", value: "month" },
  { text: "This Year", value: "year" },
  { text: "All Time", value: "all" },
] as const;

export const PopularPostsTimeframeFilters = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigation = useNavigation();
  const location = useLocation();
  const timeframe =
    new URLSearchParams(location.search).get("timeframe") || "all";
  const currentTimeframe =
    TIME_FRAMES.find((t) => t.value === timeframe)?.text || "All Time";

  // TODO: I don't know if this is the best way to close the dropdown,
  // but it works for now, I've tried to add onClick listeners to the buttons
  // but getting 'form submission canceled because the form is not connected'

  // Maybe we should try to implement below solution for all dropdowns since,
  // we pretty much need all dropdowns to close when we navigate to another page
  useEffect(() => {
    setDropdownOpen(false);
  }, [navigation.state]);

  return (
    <DropdownMenu open={dropdownOpen}>
      <DropdownMenuTrigger onClick={() => setDropdownOpen(true)} asChild>
        <OldButton>{currentTimeframe}</OldButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        style={{
          display: "flex",
        }}
      >
        <Form
          action="/posts/hot"
          style={{
            display: "flex",
          }}
        >
          {TIME_FRAMES.map(({ text, value }) => (
            <OldButton key={value} type="submit" name="timeframe" value={value}>
              {text}
            </OldButton>
          ))}
        </Form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
