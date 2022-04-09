import gql from "graphql-tag";

// https://docs.amplify.aws/cli-legacy/graphql-transformer/directives/
const clientSchemaExtensions = gql`
  # https://docs.amplify.aws/cli/graphql/data-modeling/#how-it-works
  directive @model(
    queries: ModelQueryMap
    mutations: ModelMutationMap
    subscriptions: ModelSubscriptionMap
    timestamps: TimestampConfiguration
  ) on OBJECT
  input ModelMutationMap {
    create: String
    update: String
    delete: String
  }
  input ModelQueryMap {
    get: String
    list: String
  }
  input ModelSubscriptionMap {
    onCreate: [String]
    onUpdate: [String]
    onDelete: [String]
    level: ModelSubscriptionLevel
  }
  enum ModelSubscriptionLevel {
    off
    public
    on
  }
  input TimestampConfiguration {
    createdAt: String
    updatedAt: String
  }

  # https://docs.amplify.aws/cli-legacy/graphql-transformer/key/#definition
  directive @key(
    name: String
    fields: [String!]!
    queryField: String
  ) repeatable on OBJECT

  directive @primaryKey(sortKeyFields: [String!]) on FIELD_DEFINITION

  directive @index(
    name: String
    sortKeyFields: [String!]
    queryField: String
  ) repeatable on FIELD_DEFINITION | OBJECT

  # https://docs.amplify.aws/cli-legacy/graphql-transformer/auth/#definition
  directive @auth(rules: [AuthRule!]!) on OBJECT | FIELD_DEFINITION
  input AuthRule {
    allow: AuthStrategy!
    provider: AuthProvider
    ownerField: String # defaults to "owner" when using owner auth
    identityClaim: String # defaults to "username" when using owner auth
    groupClaim: String # defaults to "cognito:groups" when using Group auth
    groups: [String] # Required when using Static Group auth
    groupsField: String # defaults to "groups" when using Dynamic Group auth
    operations: [ModelOperation] # Required for finer control
    # The following arguments are deprecated. It is encouraged to use the 'operations' argument.
    queries: [ModelQuery]
    mutations: [ModelMutation]
  }
  enum AuthStrategy {
    owner
    groups
    private
    public
  }
  enum AuthProvider {
    apiKey
    iam
    oidc
    userPools
  }
  enum ModelOperation {
    create
    update
    delete
    read
  }

  # The following objects are deprecated. It is encouraged to use ModelOperations.
  enum ModelQuery {
    get
    list
  }
  enum ModelMutation {
    create
    update
    delete
  }

  # https://docs.amplify.aws/cli-legacy/graphql-transformer/connection/#definition
  directive @connection(keyName: String, fields: [String!]) on FIELD_DEFINITION

  # https://docs.amplify.aws/cli-legacy/graphql-transformer/function/#definition
  directive @function(name: String!, region: String) on FIELD_DEFINITION

  # https://docs.amplify.aws/cli-legacy/graphql-transformer/http/#definition
  directive @http(
    method: HttpMethod
    url: String!
    headers: [HttpHeader]
  ) on FIELD_DEFINITION
  enum HttpMethod {
    PUT
    POST
    GET
    DELETE
    PATCH
  }
  input HttpHeader {
    key: String
    value: String
  }

  # https://docs.amplify.aws/cli-legacy/graphql-transformer/predictions/#definition
  directive @predictions(actions: [PredictionsActions!]!) on FIELD_DEFINITION
  enum PredictionsActions {
    identifyText # uses Amazon Rekognition to detect text
    identifyLabels # uses Amazon Rekognition to detect labels
    convertTextToSpeech # uses Amazon Polly in a lambda to output a presigned url to synthesized speech
    translateText # uses Amazon Translate to translate text from source to target language
  }

  # https://docs.amplify.aws/cli-legacy/graphql-transformer/searchable/#definition
  # Streams data from DynamoDB to OpenSearch and exposes search capabilities.
  directive @searchable(queries: SearchableQueryMap) on OBJECT
  input SearchableQueryMap {
    search: String
  }

  # https://docs.amplify.aws/cli-legacy/graphql-transformer/versioned/#definition
  directive @versioned(
    versionField: String = "version"
    versionInput: String = "expectedVersion"
  ) on OBJECT

  directive @aws_api_key on OBJECT | FIELD_DEFINITION
  directive @aws_iam on OBJECT | FIELD_DEFINITION
  directive @aws_oidc on OBJECT | FIELD_DEFINITION
  directive @aws_cognito_user_pools on OBJECT | FIELD_DEFINITION
  directive @aws_auth on FIELD_DEFINITION
  directive @aws_subscribe(mutations: [String]) on FIELD_DEFINITION

  directive @hasOne on FIELD_DEFINITION
  directive @hasMany(indexName: String, fields: [String!]) on FIELD_DEFINITION
  directive @belongsTo on FIELD_DEFINITION
  directive @manyToMany(relationName: String) on FIELD_DEFINITION

  scalar AWSDateTime
`;
