// @generated by protobuf-ts 2.9.0 with parameter client_none,generate_dependencies
// @generated from protobuf file "service.proto" (package "kampus.users", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "./google/protobuf/timestamp";
/**
 * @generated from protobuf message kampus.users.GetUserRequest
 */
export interface GetUserRequest {
    /**
     * @generated from protobuf oneof: identifier
     */
    identifier: {
        oneofKind: "id";
        /**
         * @generated from protobuf field: string id = 1;
         */
        id: string;
    } | {
        oneofKind: "username";
        /**
         * @generated from protobuf field: string username = 2;
         */
        username: string;
    } | {
        oneofKind: "email";
        /**
         * @generated from protobuf field: string email = 3;
         */
        email: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message kampus.users.GetUserResponse
 */
export interface GetUserResponse {
    /**
     * @generated from protobuf field: kampus.users.User user = 1;
     */
    user?: User;
}
/**
 * @generated from protobuf message kampus.users.GetBatchUsersRequest
 */
export interface GetBatchUsersRequest {
    /**
     * @generated from protobuf field: repeated string ids = 1;
     */
    ids: string[];
    /**
     * @generated from protobuf field: repeated string usernames = 2;
     */
    usernames: string[];
    /**
     * @generated from protobuf field: repeated string emails = 3;
     */
    emails: string[];
}
/**
 * @generated from protobuf message kampus.users.GetBatchUsersResponse
 */
export interface GetBatchUsersResponse {
    /**
     * @generated from protobuf field: repeated kampus.users.User users = 1;
     */
    users: User[];
}
/**
 * @generated from protobuf message kampus.users.CreateUserRequest
 */
export interface CreateUserRequest {
    /**
     * @generated from protobuf field: string username = 1;
     */
    username: string;
    /**
     * @generated from protobuf field: string email = 2;
     */
    email: string;
}
/**
 * @generated from protobuf message kampus.users.CreateUserResponse
 */
export interface CreateUserResponse {
    /**
     * @generated from protobuf field: kampus.users.User user = 1;
     */
    user?: User;
}
/**
 * @generated from protobuf message kampus.users.User
 */
export interface User {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string username = 2;
     */
    username: string;
    /**
     * @generated from protobuf field: string email = 3;
     */
    email: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp createdAt = 4;
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp updatedAt = 5;
     */
    updatedAt?: Timestamp;
}
// @generated message type with reflection information, may provide speed optimized methods
class GetUserRequest$Type extends MessageType<GetUserRequest> {
    constructor() {
        super("kampus.users.GetUserRequest", [
            { no: 1, name: "id", kind: "scalar", oneof: "identifier", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "username", kind: "scalar", oneof: "identifier", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "email", kind: "scalar", oneof: "identifier", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetUserRequest>): GetUserRequest {
        const message = { identifier: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetUserRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUserRequest): GetUserRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.identifier = {
                        oneofKind: "id",
                        id: reader.string()
                    };
                    break;
                case /* string username */ 2:
                    message.identifier = {
                        oneofKind: "username",
                        username: reader.string()
                    };
                    break;
                case /* string email */ 3:
                    message.identifier = {
                        oneofKind: "email",
                        email: reader.string()
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetUserRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.identifier.oneofKind === "id")
            writer.tag(1, WireType.LengthDelimited).string(message.identifier.id);
        /* string username = 2; */
        if (message.identifier.oneofKind === "username")
            writer.tag(2, WireType.LengthDelimited).string(message.identifier.username);
        /* string email = 3; */
        if (message.identifier.oneofKind === "email")
            writer.tag(3, WireType.LengthDelimited).string(message.identifier.email);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message kampus.users.GetUserRequest
 */
export const GetUserRequest = new GetUserRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetUserResponse$Type extends MessageType<GetUserResponse> {
    constructor() {
        super("kampus.users.GetUserResponse", [
            { no: 1, name: "user", kind: "message", T: () => User }
        ]);
    }
    create(value?: PartialMessage<GetUserResponse>): GetUserResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetUserResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUserResponse): GetUserResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* kampus.users.User user */ 1:
                    message.user = User.internalBinaryRead(reader, reader.uint32(), options, message.user);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetUserResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* kampus.users.User user = 1; */
        if (message.user)
            User.internalBinaryWrite(message.user, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message kampus.users.GetUserResponse
 */
export const GetUserResponse = new GetUserResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetBatchUsersRequest$Type extends MessageType<GetBatchUsersRequest> {
    constructor() {
        super("kampus.users.GetBatchUsersRequest", [
            { no: 1, name: "ids", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "usernames", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "emails", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetBatchUsersRequest>): GetBatchUsersRequest {
        const message = { ids: [], usernames: [], emails: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetBatchUsersRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetBatchUsersRequest): GetBatchUsersRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string ids */ 1:
                    message.ids.push(reader.string());
                    break;
                case /* repeated string usernames */ 2:
                    message.usernames.push(reader.string());
                    break;
                case /* repeated string emails */ 3:
                    message.emails.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetBatchUsersRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string ids = 1; */
        for (let i = 0; i < message.ids.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.ids[i]);
        /* repeated string usernames = 2; */
        for (let i = 0; i < message.usernames.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.usernames[i]);
        /* repeated string emails = 3; */
        for (let i = 0; i < message.emails.length; i++)
            writer.tag(3, WireType.LengthDelimited).string(message.emails[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message kampus.users.GetBatchUsersRequest
 */
export const GetBatchUsersRequest = new GetBatchUsersRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetBatchUsersResponse$Type extends MessageType<GetBatchUsersResponse> {
    constructor() {
        super("kampus.users.GetBatchUsersResponse", [
            { no: 1, name: "users", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => User }
        ]);
    }
    create(value?: PartialMessage<GetBatchUsersResponse>): GetBatchUsersResponse {
        const message = { users: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetBatchUsersResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetBatchUsersResponse): GetBatchUsersResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated kampus.users.User users */ 1:
                    message.users.push(User.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetBatchUsersResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated kampus.users.User users = 1; */
        for (let i = 0; i < message.users.length; i++)
            User.internalBinaryWrite(message.users[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message kampus.users.GetBatchUsersResponse
 */
export const GetBatchUsersResponse = new GetBatchUsersResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateUserRequest$Type extends MessageType<CreateUserRequest> {
    constructor() {
        super("kampus.users.CreateUserRequest", [
            { no: 1, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CreateUserRequest>): CreateUserRequest {
        const message = { username: "", email: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateUserRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateUserRequest): CreateUserRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string username */ 1:
                    message.username = reader.string();
                    break;
                case /* string email */ 2:
                    message.email = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateUserRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string username = 1; */
        if (message.username !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.username);
        /* string email = 2; */
        if (message.email !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.email);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message kampus.users.CreateUserRequest
 */
export const CreateUserRequest = new CreateUserRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateUserResponse$Type extends MessageType<CreateUserResponse> {
    constructor() {
        super("kampus.users.CreateUserResponse", [
            { no: 1, name: "user", kind: "message", T: () => User }
        ]);
    }
    create(value?: PartialMessage<CreateUserResponse>): CreateUserResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateUserResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateUserResponse): CreateUserResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* kampus.users.User user */ 1:
                    message.user = User.internalBinaryRead(reader, reader.uint32(), options, message.user);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateUserResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* kampus.users.User user = 1; */
        if (message.user)
            User.internalBinaryWrite(message.user, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message kampus.users.CreateUserResponse
 */
export const CreateUserResponse = new CreateUserResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class User$Type extends MessageType<User> {
    constructor() {
        super("kampus.users.User", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "createdAt", kind: "message", T: () => Timestamp },
            { no: 5, name: "updatedAt", kind: "message", T: () => Timestamp }
        ]);
    }
    create(value?: PartialMessage<User>): User {
        const message = { id: "", username: "", email: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<User>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: User): User {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string username */ 2:
                    message.username = reader.string();
                    break;
                case /* string email */ 3:
                    message.email = reader.string();
                    break;
                case /* google.protobuf.Timestamp createdAt */ 4:
                    message.createdAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
                    break;
                case /* google.protobuf.Timestamp updatedAt */ 5:
                    message.updatedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updatedAt);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: User, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string username = 2; */
        if (message.username !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.username);
        /* string email = 3; */
        if (message.email !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.email);
        /* google.protobuf.Timestamp createdAt = 4; */
        if (message.createdAt)
            Timestamp.internalBinaryWrite(message.createdAt, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp updatedAt = 5; */
        if (message.updatedAt)
            Timestamp.internalBinaryWrite(message.updatedAt, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message kampus.users.User
 */
export const User = new User$Type();
/**
 * @generated ServiceType for protobuf service kampus.users.Users
 */
export const Users = new ServiceType("kampus.users.Users", [
    { name: "GetUser", options: {}, I: GetUserRequest, O: GetUserResponse },
    { name: "GetBatchUsers", options: {}, I: GetBatchUsersRequest, O: GetBatchUsersResponse },
    { name: "CreateUser", options: {}, I: CreateUserRequest, O: CreateUserResponse }
]);
