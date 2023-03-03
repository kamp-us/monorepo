import { useFetchers, useTransition } from "@remix-run/react";
import NProgress from "nprogress";
import { useEffect, useMemo } from "react";

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
