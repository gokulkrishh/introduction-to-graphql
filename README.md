# GraphQL with Express Server

_A simple demo of GraphQL & explanation about what is GraphQL and its concepts._

## 😼 What is GraphQL?

- A query language for your API.
- GraphQL gives the power to ask for exactly what we need and nothing more.
- Get as many as resources in a single request.
- Evolve your API's without versions.
- GraphQL makes it easy to build powerful tools like [GraphiQL](https://github.com/graphql/graphiql) by leveraging your API’s type system.

## 🙅🏻‍♂️ Concepts of GraphQL

- [Queries & Mutations](https://graphql.org/learn/queries/) - GraphQL queries are so much easier to request data than a REST API.
- [Schema & Types](https://graphql.org/learn/schema/) - GraphQL has its own schema & type system which we are already familiar with (`String`, `Int`, `[]` etc.).
- [Resolver](https://graphql.org/learn/execution/#root-fields-resolvers) - is responsible for mapping the query to a function.
- [Validation](https://graphql.org/learn/validation/) - By using the type system, it is easy to determine whether a GraphQL query is valid or not.
- [Execution](https://graphql.org/learn/execution/) - After being validated, a GraphQL query is executed by a GraphQL server which returns a result that mirrors the shape of the requested query, typically as JSON.
- [Introspection](https://graphql.org/learn/introspection/) - It's often useful to ask a GraphQL schema for information about what queries it supports.

### 🐣🐥 Steps To Run

```bash
yarn or npm install
```

```bash
yarn or npm start
```

### Demo

- For local server ### **Open [localhost:3000](http://localhost:3000) in your browser.**

- [Demo using GraphQL API](https://hello-world-graphql.surge.sh)

- [GraphQL Server](https://hello-world-graphql-oifivtepjc.now.sh/graphql)

### 🤔 Queries to test (More of GET API's)

1.  What's better than a Hello World 🤪

```
query helloworld {
  hello
}
```

**Result**:

```
{
  "data": {
    "hello": "Hello World"
  }
}
```

2.  To get all the users from dummy JSON.

```
query getAllUsers {
  users {
    name
    age
    gender
    picture
  }
}
```

**Result**;

```json
{
	"data": {
		"users": [
			{
				"name": "Price Weber",
				"age": 37,
				"gender": "male",
				"picture": "http://placehold.it/32x32"
			},
			{
				"name": "Pennington Parsons",
				"age": 22,
				"gender": "male",
				"picture": "http://placehold.it/32x32"
			},
			{
				"name": "Yesenia Galloway",
				"age": 36,
				"gender": "female",
				"picture": "http://placehold.it/32x32"
			}
		]
	}
}
```

3.  To get a single user based on an id.

```
query getSingleUser {
  user(id: 1) {
    name
    age
    gender
    picture
  }
}
```

**Result**:

```json
{
	"data": {
		"user": {
			"name": "Price Weber",
			"age": 37,
			"gender": "male",
			"picture": "http://placehold.it/32x32"
		}
	}
}
```

#### References

- [Best practices for GraphQL](https://graphql.org/learn/best-practices/) - Serving over HTTP, Pagination, Caching etc.
- [Running an Express GraphQL Server](https://graphql.org/graphql-js/running-an-express-graphql-server/)
- [Apollo Fetch](https://github.com/apollographql/apollo-fetch)

Thanks for reading so far 😙. Please do give a star for this repo if you liked it.

##### MIT licensed
