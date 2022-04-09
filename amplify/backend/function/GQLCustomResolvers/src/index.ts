/* Amplify Params - DO NOT EDIT
API_PANO_COMMENTTABLE_ARN
	API_PANO_COMMENTTABLE_NAME
	API_PANO_GRAPHQLAPIENDPOINTOUTPUT
	API_PANO_GRAPHQLAPIIDOUTPUT
	API_PANO_GRAPHQLAPIKEYOUTPUT
	API_PANO_POSTTABLE_ARN
	API_PANO_POSTTABLE_NAME
	API_PANO_UPVOTETABLE_ARN
	API_PANO_UPVOTETABLE_NAME
	AUTH_PANO4BA861AE_USERPOOLID
	ENV
	REGION
	Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require("aws-sdk");
AWS.config.update({ region: process.env.REGION });

interface Post {
  id: string;
}

const log = (...args) => console.log(JSON.stringify(args, null, 2));
const dynamoDb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
const dynamoDbDoc = new AWS.DynamoDB.DocumentClient({
  service: dynamoDb,
});

const isUpvoted = async (event: {
  source: Post;
  identity: { username: string };
}) => {
  const post = event.source;
  const identity = event.identity;
  const postID = post.id;

  try {
    const params = {
      TableName: process.env.API_PANO_UPVOTETABLE_NAME as string,
      Key: {
        postID: { S: postID },
        owner: { S: identity.username },
      },
    };

    const upvote = await dynamoDb.getItem(params).promise();
    return !!upvote.Item;
  } catch (err) {
    console.log("Error fetching upvote", err);
    return null;
  }
};

const upvoteCount = async (event: { source: Post }) => {
  const params = {
    TableName: process.env.API_PANO_UPVOTETABLE_NAME as string,
    KeyConditionExpression: "postID = :postID",
    ExpressionAttributeValues: {
      ":postID": { S: event.source.id },
    },
  };

  const upvoteCount = await dynamoDb.query(params).promise();
  return upvoteCount.Count;
};

const commentCount = async (event: { source: Post }) => {
  const params = {
    TableName: process.env.API_PANO_COMMENTTABLE_NAME as string,
    IndexName: "byPost",
    KeyConditionExpression: "postID = :postID",
    ExpressionAttributeValues: {
      ":postID": { S: event.source.id },
    },
  };

  const commentCount = await dynamoDb.query(params).promise();
  return commentCount.Count;
};

const resolvers = {
  Post: {
    isUpvoted,
    upvoteCount,
    commentCount,
  },
};

export const handler = async (event) => {
  log("Event: ", { event });
  const typeHandler = resolvers[event.typeName];
  if (typeHandler) {
    const handler = typeHandler[event.fieldName];
    if (handler) {
      return await handler(event);
    }
  }
  throw new Error(`No handler for ${event.typeName}.${event.fieldName}`);
};
