import { API, graphqlOperation } from "aws-amplify";

export const GQLOperation = async <
  ResultType extends {},
  VariablesType extends {} = {}
>(
  query: string,
  variables?: VariablesType
) => {
  const { data } = (await API.graphql({
    ...graphqlOperation(query, variables),
    authMode: "AMAZON_COGNITO_USER_POOLS",
  })) as unknown as {
    data: ResultType;
  };

  return data;
};
