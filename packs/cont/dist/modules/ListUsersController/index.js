"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as React from "react";
const graphql_tag_1 = require("graphql-tag");
const react_apollo_1 = require("react-apollo");
exports.GET_USERS_QUERY = graphql_tag_1.default `
  query GetUsersQuery {
    getUsers {
      id
      userId
      userPw
      userNick
    }
  }
`;
exports.withGetUsers = react_apollo_1.graphql(exports.GET_USERS_QUERY, {
    props: ({ data }) => {
        let listings = [];
        if (data && !data.loading && data.getUsers) {
            listings = data.getUsers;
        }
        return {
            listings,
            loading: data ? data.loading : false
        };
    }
});
//# sourceMappingURL=index.js.map