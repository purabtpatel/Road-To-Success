export const schema = gql`
  type Result {
    result: String
  }
  type Query {
    authCallback(code: String!): Result! @skipAuth
  }
`
