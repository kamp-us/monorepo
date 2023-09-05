import { graphql, useFragment } from "react-relay";

import { UserAvatar as KampusAvatar } from "@kampus/ui";

import { type UserAvatar_user$key } from "./__generated__/UserAvatar_user.graphql";

const fragment = graphql`
  fragment UserAvatar_user on User {
    displayName @required(action: LOG)
  }
`;

interface Props {
  user: UserAvatar_user$key | null;
}

export function UserAvatar(props: Props) {
  const user = useFragment(fragment, props.user);

  if (!user) {
    return null;
  }

  return <KampusAvatar login={user.displayName} />;
}
