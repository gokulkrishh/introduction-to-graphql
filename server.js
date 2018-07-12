const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

import schema from './schema';
import { createUser, deleteUser, getUser, getUsers, updateUser } from './resolvers';

// Root Value resolver
const rootValue = {
	hello: () => 'Hello World',
	createUser,
	deleteUser,
	getUser,
	getUsers,
	updateUser
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
