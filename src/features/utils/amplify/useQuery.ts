import { useCallback, useEffect, useState } from "react";
import { GQLOperation } from "./GQLOperation";

type UseAmplifyQueryType<ResultType> = {
  data: ResultType;
  loading: boolean;
  refetch: () => void;
  error: any;
};

export const useAmplifyQuery = <
  ResultType extends {},
  VariablesType extends {} = {}
>(
  query: string,
  variables?: VariablesType
): UseAmplifyQueryType<ResultType> => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<any>(false);
  const [loading, setLoading] = useState<any>(true);

  const fetchQuery = useCallback(async () => {
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
  }, [query, variables]);

  const refetch = () => {
    fetchQuery();
  };

  useEffect(() => {
    fetchQuery();
  }, []);

  return { data, error, loading, refetch };
};
