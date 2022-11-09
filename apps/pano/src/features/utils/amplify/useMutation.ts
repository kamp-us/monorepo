import { useCallback, useState } from "react";
import { GQLOperation } from "./GQLOperation";

type UseAmplifyMutationType<ResultType, VariablesType> = {
  data: ResultType;
  loading: boolean;
  mutationFn: (variables: VariablesType) => Promise<void>;
  error: any;
};

export const useAmplifyMutation = <
  ResultType extends {},
  VariablesType extends {} = {}
>(
  query: string
): UseAmplifyMutationType<ResultType, VariablesType> => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<any>(false);
  const [loading, setLoading] = useState<any>(true);

  const fetchQuery = useCallback(
    async (variables?: VariablesType) => {
      try {
        const data = await GQLOperation<ResultType, VariablesType>(
          query,
          variables
        );
        setData(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [query]
  );

  return { data, error, loading, mutationFn: fetchQuery };
};
