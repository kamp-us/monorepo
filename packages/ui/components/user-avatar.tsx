"use client";

import React, { forwardRef } from "react";

import { Avatar, AvatarFallback } from "./avatar";

export interface UserAvatarProps {
  login: string;
}

export const UserAvatar = forwardRef<HTMLSpanElement, UserAvatarProps>(({ login }, ref) => {
  const firstLetter = login.charAt(0).toUpperCase();

  return (
    <Avatar>
      <AvatarFallback ref={ref}>{firstLetter}</AvatarFallback>
    </Avatar>
  );
});

UserAvatar.displayName = "UserAvatar";
