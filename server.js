const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');

import { getUser, getUsers } from './resolvers';

// Lets build a schema for GraphQL
const schema = buildSchema(`
  type Query {
    hello: String
    user(id: Int): Person
    users(gender: String): [Person]
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

// Root Value resolver
const rootValue = {
	hello: () => 'Hello World',
	user: getUser,
	users: getUsers
};

// Create a express server
const app = express();

// To enable CORS
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

// To enable CORS
app.options('/graphql', cors());

// Create a GraphQL Endpoint
app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		rootValue,
		graphiql: true // Enable GraphiQL when server endpoint is accessed in browser
	})
);

const port = 3000;

app.listen(port, () => {
	console.log(`Running a GraphQL API server at localhost:${port}/graphql`);
});
