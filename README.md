# Introduction to GraphQL

_A simple demo of GraphQL & explanation about what is GraphQL and its concepts._

## 😼 What is GraphQL?

- A query language for your API.
- GraphQL gives the power to ask for exactly what we need and nothing more.
- Get as many as resources in a single request.
- Evolve your API's without versions.
- GraphQL makes it easy to build powerful tools like [GraphiQL](https://github.com/graphql/graphiql) by leveraging your API’s type system.

## 🐙 Concepts of GraphQL

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

### 🎅🏻 Demo

- For local server **open [localhost:3000](http://localhost:3000) in your browser.**

- [Demo using GraphQL API](https://hello-world-graphql.surge.sh).

- [Demo GraphQL Server](https://hello-world-graphql-oifivtepjc.now.sh/graphql).

### 🧤 Libraries Used

- [GraphQL](https://www.npmjs.com/package/graphql).
- [Express](https://www.npmjs.com/package/express) server.
- [GraphQL HTTP Server Middleware](https://www.npmjs.com/package/express-graphql).
- [apollo-fetch](https://github.com/apollographql/apollo-fetch) for making fetch requests for demo.

### 🤔 Queries (More of GET API's)

1.  What is better than a Hello World 🤪

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
  getUsers {
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
  getUser(id: 1) {
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

### Variables, Arguments & Types

Like any other programming language, GraphQL has `variables`, `arguments`. Lets see some examples.

#### [Types](https://graphql.org/graphql-js/type/)

The most basic components of a GraphQL schema are object types, which just represent a kind of object you can fetch from your service, and what fields it has. If you are a web developer, you can relate this with [flow](https://github.com/facebook/flow) or [typescript](https://www.typescriptlang.org/docs/handbook/basic-types.html).

**Example**:

```
type Person {
  name: String!
}
```

- `String!` - `name` property is a non-nullable string. Meaning you will always give a value for this property.
- [More types](https://graphql.org/graphql-js/type/).

#### [Arguments](https://graphql.org/learn/queries/#arguments)

We can pass arguments to any query.

**Example**:

```
query user {
  user(id: 1) {
    name
    age
    gender
    picture
  }
}
```

#### [Variables](https://graphql.org/learn/queries/#variables)

So far, we have been writing all of our arguments inside the query string. But in most applications, the arguments to fields will be dynamic.

**Example**:

**variables**:

```
{
  "userId": 1
}
```

**query**:

```
query user($id: Int!) {
  getUser(id: $id) {
    name
    age
    gender
    picture,
    about
  }
}
```

### 🍔 Mutations

Most discussions of GraphQL focus on data fetching, but any complete data platform needs a way to modify server-side data as well. It is analogous to performing HTTP verbs such as `POST`, `PATCH`, and `DELETE`. Just like queries, mutation should have `mutation` instead of `query` with some id or something.

**Examples**: open **[localhost:3000/graphql](http://localhost:3000/graphql)** to try the below.

- **Create a new user**: (POST API 🤪)

**variables**:

```
{
  "name": "JEDI",
  "age": 25,
  "gender": "male"
}
```

**mutation**:

```
mutation user($name: String!, $age: Int!, $gender: String) {
  createUser(name: $name, age: $age, gender: $gender) {
    name
    age
    gender
  }
}
```

**Result**:

```json
{
	"data": {
		"createUser": {
			"name": "JEDI",
			"age": 25,
			"gender": "male"
		}
	}
}
```

- **Update a existing user details**: (PUT API 😁)

**variables**:

```
{
  "id": 1,
  "name": "JEDI 🙃",
  "age": 26
}
```

**mutation**:

```
mutation user($name: Int!, $name: String!) {
  updateUser(name: $name, age: $age, gender: $gender) {
    name
    age
  }
}
```

**Result**:

```json
{
	"data": {
		"updateUser": {
			"name": "JEDI 🙃",
			"age": 25
		}
	}
}
```

- **Delate a user**: (DELETE API 😜)

**variables**:

```
{
  "id": 1
}
```

**mutation**:

```
mutation user($id: Int!) {
  deleteUser(id: $id) {
    id
    name
    age
    gender
  }
}
```

**Result**:

```json
{
	"data": {
		"deleteUser": {
			"id": 1,
			"name": "Price Weber",
			"age": 37,
			"gender": "male"
		}
	}
}
```

### Test Cases for GraphQL.

If are wondering how to write test cases for GraphQL. Here is an example for you [starWarsValidation-test.js](https://github.com/graphql/graphql-js/blob/master/src/__tests__/starWarsValidation-test.js).

#### References

- [Best practices for GraphQL](https://graphql.org/learn/best-practices/) - Serving over HTTP, Pagination, Caching etc.
- [Running an Express GraphQL Server](https://graphql.org/graphql-js/running-an-express-graphql-server/)
- [GraphQL vs REST](https://philsturgeon.uk/api/2017/01/24/graphql-vs-rest-overview/).

Thanks for reading so far 😙. Please do give a star for this repo if you liked it.

##### MIT licensed
