export interface GetUsersQuery_getUsers {
    __typename: "BlogUserInfo";
    id: string;
    userId: string;
    userPw: string;
    userNick: string;
}
export interface GetUsersQuery {
    getUsers: GetUsersQuery_getUsers[];
}
export interface RegisterMutation_register {
    __typename: "BlogUserInfo";
    id: string;
    userId: string;
    userPw: string;
    userNick: string;
}
export interface RegisterMutation {
    register: RegisterMutation_register;
}
export interface RegisterMutationVariables {
    inputData: RegisterInput;
}
export interface RegisterInput {
    userId: string;
    userPw: string;
    userNick: string;
}
