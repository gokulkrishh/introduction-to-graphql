const { buildSchema } = require('graphql');

// Lets build a schema for GraphQL
const schema = buildSchema(`
  type Query {
    hello: String
    getUser(id: Int!): Person
    getUsers(gender: String): [Person]
  },
  type Mutation {
    createUser(name: String!, age: Int!, gender: String): Person
    updateUser(id: Int!, name: String!, age: Int!, gender: String): Person
    deleteUser(id: Int!): Person
  },
  type Person {
    id: Int
    name: String
    age: Int
    gender: String
    picture: String
    balance: String
		eyeColor: String
		company: String
		email: String
		phone: String
		address: String
		about: String
		latitude: String
		longitude: String
  }
`);

export default schema;
