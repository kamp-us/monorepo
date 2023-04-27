import type { AbilityClass } from "@casl/ability";
import { AbilityBuilder, PureAbility } from "@casl/ability";

type Actions = "manage" | "create" | "read" | "update" | "delete" | "publish";
type Subjects = "Comment" | "Post" | "all";

export type AppAbility = PureAbility<[Actions, Subjects]>;
export const Ability = PureAbility as AbilityClass<AppAbility>;

export const defineRulesFor = (role: string) => {
  const { can, cannot, rules } = new AbilityBuilder(Ability);

  if (role === "admin") {
    can("manage", "all");
  } else {
    cannot("read", "Comment");
    can("update", "Comment");
  }

  return rules;
};

export function buildAbilityFor(role: string): AppAbility {
  return new Ability(defineRulesFor(role));
}
