"use client";

import React, { forwardRef } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export interface UserAvatarProps {
  login: string;
  src?: string;
}

export const UserAvatar = forwardRef<HTMLSpanElement, UserAvatarProps>(({ login, src }, ref) => {
  const firstLetter = login.charAt(0).toUpperCase();

  return (
    <Avatar>
      <AvatarImage src={src} alt={login} />
      <AvatarFallback ref={ref}>{firstLetter}</AvatarFallback>
    </Avatar>
  );
});

UserAvatar.displayName = "UserAvatar";
