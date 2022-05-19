import { FC, forwardRef } from "react";
import { Avatar, AvatarFallback } from "./Avatar";

export interface UserAvatarProps {
  login: string;
}

export const UserAvatar: FC<UserAvatarProps> = forwardRef<
  HTMLSpanElement,
  UserAvatarProps
>(({ login }, ref) => {
  const firstLetter = login.charAt(0).toUpperCase();

  return (
    <Avatar>
      <AvatarFallback ref={ref}>{firstLetter}</AvatarFallback>
    </Avatar>
  );
});
