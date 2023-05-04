import {
  TwirpContext,
  TwirpServer,
  RouterEvents,
  TwirpError,
  TwirpErrorCode,
  Interceptor,
  TwirpContentType,
  chainInterceptors,
} from "twirp-ts";
import {
  GetUserRequest,
  GetUserResponse,
  GetBatchUsersRequest,
  GetBatchUsersResponse,
  CreateUserRequest,
  CreateUserResponse,
} from "./service";

//==================================//
//          Client Code             //
//==================================//

interface Rpc {
  request(
    service: string,
    method: string,
    contentType: "application/json" | "application/protobuf",
    data: object | Uint8Array
  ): Promise<object | Uint8Array>;
}

export interface UsersClient {
  GetUser(request: GetUserRequest): Promise<GetUserResponse>;
  GetBatchUsers(request: GetBatchUsersRequest): Promise<GetBatchUsersResponse>;
  CreateUser(request: CreateUserRequest): Promise<CreateUserResponse>;
}

export class UsersClientJSON implements UsersClient {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetUser.bind(this);
    this.GetBatchUsers.bind(this);
    this.CreateUser.bind(this);
  }
  GetUser(request: GetUserRequest): Promise<GetUserResponse> {
    const data = GetUserRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    });
    const promise = this.rpc.request(
      "kampus.users.Users",
      "GetUser",
      "application/json",
      data as object
    );
    return promise.then((data) =>
      GetUserResponse.fromJson(data as any, { ignoreUnknownFields: true })
    );
  }

  GetBatchUsers(request: GetBatchUsersRequest): Promise<GetBatchUsersResponse> {
    const data = GetBatchUsersRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    });
    const promise = this.rpc.request(
      "kampus.users.Users",
      "GetBatchUsers",
      "application/json",
      data as object
    );
    return promise.then((data) =>
      GetBatchUsersResponse.fromJson(data as any, { ignoreUnknownFields: true })
    );
  }

  CreateUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    const data = CreateUserRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    });
    const promise = this.rpc.request(
      "kampus.users.Users",
      "CreateUser",
      "application/json",
      data as object
    );
    return promise.then((data) =>
      CreateUserResponse.fromJson(data as any, { ignoreUnknownFields: true })
    );
  }
}

export class UsersClientProtobuf implements UsersClient {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetUser.bind(this);
    this.GetBatchUsers.bind(this);
    this.CreateUser.bind(this);
  }
  GetUser(request: GetUserRequest): Promise<GetUserResponse> {
    const data = GetUserRequest.toBinary(request);
    const promise = this.rpc.request("kampus.users.Users", "GetUser", "application/protobuf", data);
    return promise.then((data) => GetUserResponse.fromBinary(data as Uint8Array));
  }

  GetBatchUsers(request: GetBatchUsersRequest): Promise<GetBatchUsersResponse> {
    const data = GetBatchUsersRequest.toBinary(request);
    const promise = this.rpc.request(
      "kampus.users.Users",
      "GetBatchUsers",
      "application/protobuf",
      data
    );
    return promise.then((data) => GetBatchUsersResponse.fromBinary(data as Uint8Array));
  }

  CreateUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    const data = CreateUserRequest.toBinary(request);
    const promise = this.rpc.request(
      "kampus.users.Users",
      "CreateUser",
      "application/protobuf",
      data
    );
    return promise.then((data) => CreateUserResponse.fromBinary(data as Uint8Array));
  }
}

//==================================//
//          Server Code             //
//==================================//

export interface UsersTwirp<T extends TwirpContext = TwirpContext> {
  GetUser(ctx: T, request: GetUserRequest): Promise<GetUserResponse>;
  GetBatchUsers(ctx: T, request: GetBatchUsersRequest): Promise<GetBatchUsersResponse>;
  CreateUser(ctx: T, request: CreateUserRequest): Promise<CreateUserResponse>;
}

export enum UsersMethod {
  GetUser = "GetUser",
  GetBatchUsers = "GetBatchUsers",
  CreateUser = "CreateUser",
}

export const UsersMethodList = [
  UsersMethod.GetUser,
  UsersMethod.GetBatchUsers,
  UsersMethod.CreateUser,
];

export function createUsersServer<T extends TwirpContext = TwirpContext>(service: UsersTwirp<T>) {
  return new TwirpServer<UsersTwirp, T>({
    service,
    packageName: "kampus.users",
    serviceName: "Users",
    methodList: UsersMethodList,
    matchRoute: matchUsersRoute,
  });
}

function matchUsersRoute<T extends TwirpContext = TwirpContext>(
  method: string,
  events: RouterEvents<T>
) {
  switch (method) {
    case "GetUser":
      return async (
        ctx: T,
        service: UsersTwirp,
        data: Buffer,
        interceptors?: Interceptor<T, GetUserRequest, GetUserResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "GetUser" };
        await events.onMatch(ctx);
        return handleUsersGetUserRequest(ctx, service, data, interceptors);
      };
    case "GetBatchUsers":
      return async (
        ctx: T,
        service: UsersTwirp,
        data: Buffer,
        interceptors?: Interceptor<T, GetBatchUsersRequest, GetBatchUsersResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "GetBatchUsers" };
        await events.onMatch(ctx);
        return handleUsersGetBatchUsersRequest(ctx, service, data, interceptors);
      };
    case "CreateUser":
      return async (
        ctx: T,
        service: UsersTwirp,
        data: Buffer,
        interceptors?: Interceptor<T, CreateUserRequest, CreateUserResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "CreateUser" };
        await events.onMatch(ctx);
        return handleUsersCreateUserRequest(ctx, service, data, interceptors);
      };
    default:
      events.onNotFound();
      const msg = `no handler found`;
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
  }
}

function handleUsersGetUserRequest<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: UsersTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetUserRequest, GetUserResponse>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handleUsersGetUserJSON<T>(ctx, service, data, interceptors);
    case TwirpContentType.Protobuf:
      return handleUsersGetUserProtobuf<T>(ctx, service, data, interceptors);
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
  }
}

function handleUsersGetBatchUsersRequest<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: UsersTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetBatchUsersRequest, GetBatchUsersResponse>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handleUsersGetBatchUsersJSON<T>(ctx, service, data, interceptors);
    case TwirpContentType.Protobuf:
      return handleUsersGetBatchUsersProtobuf<T>(ctx, service, data, interceptors);
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
  }
}

function handleUsersCreateUserRequest<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: UsersTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreateUserRequest, CreateUserResponse>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handleUsersCreateUserJSON<T>(ctx, service, data, interceptors);
    case TwirpContentType.Protobuf:
      return handleUsersCreateUserProtobuf<T>(ctx, service, data, interceptors);
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
  }
}
async function handleUsersGetUserJSON<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: UsersTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetUserRequest, GetUserResponse>[]
) {
  let request: GetUserRequest;
  let response: GetUserResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = GetUserRequest.fromJson(body, { ignoreUnknownFields: true });
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetUserRequest,
      GetUserResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetUser(ctx, inputReq);
    });
  } else {
    response = await service.GetUser(ctx, request!);
  }

  return JSON.stringify(
    GetUserResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  );
}

async function handleUsersGetBatchUsersJSON<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: UsersTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetBatchUsersRequest, GetBatchUsersResponse>[]
) {
  let request: GetBatchUsersRequest;
  let response: GetBatchUsersResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = GetBatchUsersRequest.fromJson(body, { ignoreUnknownFields: true });
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetBatchUsersRequest,
      GetBatchUsersResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetBatchUsers(ctx, inputReq);
    });
  } else {
    response = await service.GetBatchUsers(ctx, request!);
  }

  return JSON.stringify(
    GetBatchUsersResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  );
}

async function handleUsersCreateUserJSON<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: UsersTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreateUserRequest, CreateUserResponse>[]
) {
  let request: CreateUserRequest;
  let response: CreateUserResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = CreateUserRequest.fromJson(body, { ignoreUnknownFields: true });
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      CreateUserRequest,
      CreateUserResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.CreateUser(ctx, inputReq);
    });
  } else {
    response = await service.CreateUser(ctx, request!);
  }

  return JSON.stringify(
    CreateUserResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  );
}
async function handleUsersGetUserProtobuf<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: UsersTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetUserRequest, GetUserResponse>[]
) {
  let request: GetUserRequest;
  let response: GetUserResponse;

  try {
    request = GetUserRequest.fromBinary(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetUserRequest,
      GetUserResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetUser(ctx, inputReq);
    });
  } else {
    response = await service.GetUser(ctx, request!);
  }

  return Buffer.from(GetUserResponse.toBinary(response));
}

async function handleUsersGetBatchUsersProtobuf<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: UsersTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetBatchUsersRequest, GetBatchUsersResponse>[]
) {
  let request: GetBatchUsersRequest;
  let response: GetBatchUsersResponse;

  try {
    request = GetBatchUsersRequest.fromBinary(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetBatchUsersRequest,
      GetBatchUsersResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetBatchUsers(ctx, inputReq);
    });
  } else {
    response = await service.GetBatchUsers(ctx, request!);
  }

  return Buffer.from(GetBatchUsersResponse.toBinary(response));
}

async function handleUsersCreateUserProtobuf<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: UsersTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreateUserRequest, CreateUserResponse>[]
) {
  let request: CreateUserRequest;
  let response: CreateUserResponse;

  try {
    request = CreateUserRequest.fromBinary(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      CreateUserRequest,
      CreateUserResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.CreateUser(ctx, inputReq);
    });
  } else {
    response = await service.CreateUser(ctx, request!);
  }

  return Buffer.from(CreateUserResponse.toBinary(response));
}
