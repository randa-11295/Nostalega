import { gql } from "@apollo/client";

export const addRejstrationQuiery = gql`
mutation Mutation($registerInput: RegisterInput!) {
  register(registerInput: $registerInput) {
    token
    _id
    name
  }
}
`;

export const addLoginQuiery = gql`
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    name
    token
  }
}
`;

