"use client";

import { useEffect, useState, type PropsWithChildren } from "react";
import { Slot } from "@radix-ui/react-slot";

const formatter = new Intl.RelativeTimeFormat("tr", {
  // numeric: "auto",
});

const DIVISIONS = [
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
];

export function formatTimeAgo(date: Date) {
  const now = new Date();
  let duration = (date.getTime() - now.getTime()) / 1000;

  for (let i = 0; i <= DIVISIONS.length; i++) {
    const division = DIVISIONS[i] as (typeof DIVISIONS)[number];
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name as Intl.RelativeTimeFormatUnit);
    }
    duration /= division.amount;
  }
}

interface TimeagoProps extends PropsWithChildren {
  date: Date | string;
  asChild?: boolean;
}

export const TimeAgo = (props: TimeagoProps) => {
  const Comp = props.asChild ? Slot : "div";
  const [timeAgo, setTimeAgo] = useState(
    formatTimeAgo(typeof props.date === "string" ? new Date(props.date) : props.date)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeAgo(formatTimeAgo(typeof props.date === "string" ? new Date(props.date) : props.date));
    }, 10000);

    return () => clearInterval(timer);
  }, [props.date]);

  // If we don't suppress the hydration warning, we get this error: https://nextjs.org/docs/messages/react-hydration-error
  // https://nextjs.org/docs/messages/react-hydration-error#solution-3-using-suppresshydrationwarning
  return <Comp suppressHydrationWarning>{timeAgo}</Comp>;
};
