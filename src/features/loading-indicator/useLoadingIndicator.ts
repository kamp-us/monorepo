import { useEffect, useMemo } from "react";
import { useFetchers, useTransition } from "remix";
import NProgress from "nprogress";

export const useLoadingIndicator = () => {
  const transition = useTransition();
  const fetchers = useFetchers();

  const state = useMemo<"idle" | "loading">(() => {
    const states = [transition.state, ...fetchers.map((f) => f.state)];
    return states.every((s) => s === "idle") ? "idle" : "loading";
  }, [transition.state, fetchers]);

  useEffect(() => {
    if (state === "idle") {
      NProgress.done();
    } else {
      NProgress.start();
    }
  }, [state]);
};
