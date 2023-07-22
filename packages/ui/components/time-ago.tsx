"use client";

import { useEffect, useState } from "react";

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

interface TimeagoProps {
  date: Date;
}

export const Timeago = (props: TimeagoProps) => {
  const [timeAgo, setTimeAgo] = useState(formatTimeAgo(props.date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeAgo(formatTimeAgo(props.date));
    }, 10000);

    return () => clearInterval(timer);
  }, [props.date]);

  return <>{timeAgo}</>;
};
