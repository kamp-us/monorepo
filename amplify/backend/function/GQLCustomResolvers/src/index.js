"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.handler = void 0;
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
var AWS = require("aws-sdk");
AWS.config.update({ region: process.env.REGION });
var log = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return console.log(JSON.stringify(args, null, 2));
};
var dynamoDb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
var dynamoDbDoc = new AWS.DynamoDB.DocumentClient({
    service: dynamoDb
});
var isUpvoted = function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var post, identity, postID, params, upvote, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                post = event.source;
                identity = event.identity;
                postID = post.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                params = {
                    TableName: process.env.API_PANO_UPVOTETABLE_NAME,
                    Key: {
                        postID: { S: postID },
                        owner: { S: identity.username }
                    }
                };
                return [4 /*yield*/, dynamoDb.getItem(params).promise()];
            case 2:
                upvote = _a.sent();
                return [2 /*return*/, !!upvote.Item];
            case 3:
                err_1 = _a.sent();
                console.log("Error fetching upvote", err_1);
                return [2 /*return*/, null];
            case 4: return [2 /*return*/];
        }
    });
}); };
var upvoteCount = function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var params, upvoteCount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {
                    TableName: process.env.API_PANO_UPVOTETABLE_NAME,
                    KeyConditionExpression: "postID = :postID",
                    ExpressionAttributeValues: {
                        ":postID": { S: event.source.id }
                    }
                };
                return [4 /*yield*/, dynamoDb.query(params).promise()];
            case 1:
                upvoteCount = _a.sent();
                return [2 /*return*/, upvoteCount.Count];
        }
    });
}); };
var commentCount = function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var params, commentCount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {
                    TableName: process.env.API_PANO_COMMENTTABLE_NAME,
                    IndexName: "byPost",
                    KeyConditionExpression: "postID = :postID",
                    ExpressionAttributeValues: {
                        ":postID": { S: event.source.id }
                    }
                };
                return [4 /*yield*/, dynamoDb.query(params).promise()];
            case 1:
                commentCount = _a.sent();
                return [2 /*return*/, commentCount.Count];
        }
    });
}); };
var resolvers = {
    Post: {
        isUpvoted: isUpvoted,
        upvoteCount: upvoteCount,
        commentCount: commentCount
    }
};
var handler = function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var typeHandler, handler_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                log("Event: ", { event: event });
                typeHandler = resolvers[event.typeName];
                if (!typeHandler) return [3 /*break*/, 2];
                handler_1 = typeHandler[event.fieldName];
                if (!handler_1) return [3 /*break*/, 2];
                return [4 /*yield*/, handler_1(event)];
            case 1: return [2 /*return*/, _a.sent()];
            case 2: throw new Error("No handler for ".concat(event.typeName, ".").concat(event.fieldName));
        }
    });
}); };
exports.handler = handler;
