/// <reference types="react" />
import { GetUsersQuery_getUsers } from "../../schemaTypes";
export declare const GET_USERS_QUERY: import("graphql").DocumentNode;
export interface IWithListUsers {
    listings: GetUsersQuery_getUsers[];
    loading: boolean;
}
export declare const withGetUsers: (WrappedComponent: import("react").ComponentType<any>) => import("react").ComponentClass<any, any>;
