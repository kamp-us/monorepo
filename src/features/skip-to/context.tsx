import type { FC } from "react";
import { useContext } from "react";
import { useCallback, useMemo } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export interface SkipToTarget {
  id: string;
  label: string;
}

interface SkipToState {
  targets: Record<string, SkipToTarget>;
}

interface SkipToActions {
  add: (id: string, label: string) => void;
  remove: (id: string) => void;
}

type SkipTo = SkipToState & { actions: SkipToActions };

const noop = () => {};

const initialContext: SkipTo = {
  targets: {
    "main-content": {
      id: "main-content",
      label: "Ana içerik",
    },
  },
  actions: {
    add: noop,
    remove: noop,
  },
};

const SkipToContext = createContext<SkipTo>(initialContext);

type SkipToAction =
  | {
      type: "add";
      id: string;
      label: string;
    }
  | {
      type: "remove";
      id: string;
    };

const reducer = (state: SkipToState, action: SkipToAction) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        targets: {
          ...state.targets,
          [action.id]: {
            id: action.id,
            label: action.label,
          },
        },
      };
    case "remove":
      const targets = { ...state.targets };
      delete targets[action.id];

      return {
        ...state,
        targets,
      };
    default:
      return state;
  }
};

export const useSkipToContext = () => useContext(SkipToContext);

export const SkipToContextManager: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialContext);

  const add = useCallback((id: string, label: string) => {
    dispatch({ type: "add", id, label });
  }, []);

  const remove = useCallback((id: string) => {
    dispatch({ type: "remove", id });
  }, []);

  const actions = useMemo(() => {
    return { add, remove };
  }, [add, remove]);

  const api: SkipTo = {
    targets: state.targets,
    actions,
  };

  return (
    <SkipToContext.Provider value={api}>{children}</SkipToContext.Provider>
  );
};
