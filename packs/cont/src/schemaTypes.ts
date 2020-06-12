/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUsersQuery
// ====================================================

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

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

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

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface RegisterInput {
  userId: string;
  userPw: string;
  userNick: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
