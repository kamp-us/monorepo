import type { Authenticator, Strategy } from "remix-auth";
import { AuthorizationError } from "remix-auth";

export { AuthorizationError };

type StrategyMap<TKey extends string, TUser = unknown> = Record<
  TKey,
  Strategy<TUser, never>
>;

interface Props<
  TStrategies extends StrategyMap<TKey, TUser>,
  TKey extends string = string,
  TUser = unknown
> {
  readonly strategies: TStrategies;
  readonly authenticator: Authenticator<TUser>;
}

export class KampusAuthenticator<
  TStrategies extends StrategyMap<TKey, TUser>,
  TKey extends string = string,
  TUser = any
> {
  readonly strategies: TStrategies;
  readonly authenticator: Authenticator<TUser>;

  constructor({ strategies, authenticator }: Props<TStrategies, TKey, TUser>) {
    this.strategies = strategies;
    this.authenticator = authenticator;

    Object.entries<Strategy<TUser, never>>(this.strategies).forEach(
      ([name, strategy]) => {
        this.authenticator.use(strategy, name);
      }
    );
  }

  public authenticate(name: TKey, request: Request, options: any) {
    return this.authenticator.authenticate(name, request, options);
  }

  public isAuthenticated(request: Request, options?: RedirectOptions) {
    return this.authenticator.isAuthenticated(request, options as any);
  }

  public logout(request: Request, options: { redirectTo: string }) {
    return this.authenticator.logout(request, options);
  }
}

type RedirectOptions =
  | {
      successRedirect: string;
    }
  | {
      failureRedirect: string;
    }
  | {
      successRedirect: string;
      failureRedirect: string;
    };
