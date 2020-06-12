// import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import {
    GetUsersQuery,
    GetUsersQuery_getUsers
} from "../../schemaTypes";

export const GET_USERS_QUERY = gql`
  query GetUsersQuery {
    getUsers {
      id
      userId
      userPw
      userNick
    }
  }
`;

export interface IWithListUsers {
  listings: GetUsersQuery_getUsers[];
  loading: boolean;
}

export const withGetUsers = graphql<
  any,
  GetUsersQuery,
  {},
  IWithListUsers
>(GET_USERS_QUERY, {
  props: ({ data }) => {
    let listings: GetUsersQuery_getUsers[] = [];

    if (data && !data.loading && data.getUsers) {
      listings = data.getUsers;
    }

    return {
      listings,
      loading:  data ? data.loading : false
    };
  }
});