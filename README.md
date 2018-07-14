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
- [Schema & Types, Variables, Arguments](https://graphql.org/learn/schema/) - GraphQL has its own schema & type system which we are already familiar with (`String`, `Int`, `[]` etc.).
- [Resolver](https://graphql.org/learn/execution/#root-fields-resolvers) - is responsible for mapping the query to a function.
- [Validation](https://graphql.org/learn/validation/) - By using the type system, it is easy to determine whether a GraphQL query is valid or not.
- [Execution](https://graphql.org/learn/execution/) - After being validated, a GraphQL query is executed by a GraphQL server which returns a result that mirrors the shape of the requested query, typically as JSON.
- [Introspection](https://graphql.org/learn/introspection/) - It's often useful to ask a GraphQL schema for information about what queries it supports.

## 🐣🐥 Steps To Run

```bash
yarn or npm install
```

```bash
yarn or npm start
```

## 🎅🏻 Demo

- For local server **open [localhost:3000](http://localhost:3000) in your browser.**

- [Demo using GraphQL API](https://hello-world-graphql.surge.sh).

- [Demo GraphQL Server](https://hello-world-graphql-oifivtepjc.now.sh/graphql).

## 🧤 Libraries Used

- [GraphQL](https://www.npmjs.com/package/graphql).
- [Express](https://www.npmjs.com/package/express) server.
- [GraphQL HTTP Server Middleware](https://www.npmjs.com/package/express-graphql).
- [apollo-fetch](https://github.com/apollographql/apollo-fetch) for making fetch requests for demo.

### 1. Variables, Arguments & Types

Like any other programming language, GraphQL has `variables`, `arguments`. Lets see some examples.

#### [Types](https://graphql.org/graphql-js/type/)

The most basic components of a GraphQL schema are object types, which just represent a kind of object you can fetch from your service, and what fields it has. If you are a web developer, you can relate this with [flow](https://github.com/facebook/flow) or [typescript](https://www.typescriptlang.org/docs/handbook/basic-types.html).

**Example**:

```graphql
type Person {
  name: String!
}
```

- `String!` - `name` property is a non-nullable string. Meaning you will always give a value for this property.
- [More types](https://graphql.org/graphql-js/type/).

#### [Arguments](https://graphql.org/learn/queries/#arguments)

We can pass arguments to any query.

**Example**:

```graphql
query user {
  getUser(id: 1) {
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

```graphql
{
  "userId": 1
}
```

**query**:

```graphql
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

### 2. 🤔 Queries (GET API's)

#### 1.  What is better than a Hello World 🤪

```graphql
query helloworld {
  hello
}
```

**Result**:

```graphql
{
  "data": {
    "hello": "Hello World"
  }
}
```

#### 2.  To get all the users from dummy JSON.

```graphql
query getAllUsers {
  getUsers {
    name
    age
    gender
    picture
  }
}
```

**Resolver [getUsers](https://github.com/gokulkrishh/introduction-to-graphql/blob/master/resolvers/Query.js#L9)**:

```js
const getUsers = args => {
  const { gender } = args;
  if (gender) return users.filter(user => user.gender === gender);
  else return users;
};
```

**Result**:

```json
{
  "data":{
    "users":[
      {
        "name":"Price Weber",
        "age":37,
        "gender":"male",
        "picture":"http://placehold.it/32x32"
      },
      {
        "name":"Pennington Parsons",
        "age":22,
        "gender":"male",
        "picture":"http://placehold.it/32x32"
      },
      {
        "name":"Yesenia Galloway",
        "age":36,
        "gender":"female",
        "picture":"http://placehold.it/32x32"
      }
    ]
  }
}
```

#### 3.  To get a single user based on an id.

```graphql
query user {
  getUser(id: 1) {
    name
    age
    gender
    picture
  }
}
```

**Resolver [getUser](https://github.com/gokulkrishh/introduction-to-graphql/blob/master/resolvers/Query.js#L3)**:

```js
export const getUser = args => {
  const { id } = args;
  const user = users.filter(user => user.id === id);
  if (user.length === 1) return user[0];
  else return `User not found for the id ${id}`;
};
```

**Result**:

```json
{
  "data":{
    "user":{
      "name":"Price Weber",
      "age":37,
      "gender":"male",
      "picture":"http://placehold.it/32x32"
    }
  }
}
```

### 3. 🍔 Mutations

Most discussions of GraphQL focus on data fetching, but any complete data platform needs a way to modify server-side data as well. It is analogous to performing HTTP verbs such as `POST`, `PATCH`, and `DELETE`. Just like queries, mutation should have `mutation` instead of `query` with some id or something.

**Examples**: open **[localhost:3000/graphql](http://localhost:3000/graphql)** to try the below.

#### Create a new user: (POST API 🤪)

**variables**:

```graphql
{
  "name": "JEDI",
  "age": 25,
  "gender": "male"
}
```

**mutation**:

```graphql
mutation user($name: String!, $age: Int!, $gender: String) {
  createUser(name: $name, age: $age, gender: $gender) {
    name
    age
    gender
  }
}
```

**Resolver for [createUser](https://github.com/gokulkrishh/introduction-to-graphql/blob/master/resolvers/Mutation.js#L3)**:

```js
const createUser = args => {
  const { name, age, gender } = args;
  const user = users.filter(user => user.name === name); // users from DB
  if (user.length === 0) {
    return user; // Save in DB and return
  } 
  else return `A user with that name already exists.`;
};
```

**Result**:

```json
{
  "data":{
    "createUser":{
      "name":"JEDI",
      "age":25,
      "gender":"male"
    }
  }
}
```

#### Update a existing user details: (PUT API 😁)

**variables**:

```graphql
{
  "id": 1,
  "name": "JEDI 🙃",
  "age": 26
}
```

**mutation**:

```graphql
mutation user($name: Int!, $name: String!) {
  updateUser(name: $name, age: $age, gender: $gender) {
    name
    age
  }
}
```

**Resolver for [updateUser](https://github.com/gokulkrishh/introduction-to-graphql/blob/master/resolvers/Mutation.js#L13)**:

```js
const updateUser = args => {
  const { id, name, age, gender } = args;
  const user = users.filter(user => user.id === id);
  if (user.length === 1) {
    return user; // Save the updates in DB and return
  } 
  else return `User doesn't exist for id ${id}.`;
};
```

**Result**:

```json
{
  "data":{
    "updateUser":{
      "name":"JEDI 🙃",
      "age":25
    }
  }
}
```

#### Delate a user: (DELETE API 😜)

**variables**:

```graphql
{
  "id": 1
}
```

**mutation**:

```graphql
mutation user($id: Int!) {
  deleteUser(id: $id) {
    id
    name
    age
    gender
  }
}
```

**Resolver [deleteUser](https://github.com/gokulkrishh/introduction-to-graphql/blob/master/resolvers/Mutation.js#L24)**:

```js
const deleteUser = args => {
  const { id } = args;
  const user = users.filter(user => user.id === id);
  if (user.length === 1) {
    return user; // Delete from DB and return user or return ok
  } 
  else return `User doesn't exist for id ${id}.`;
};
```

**Result**:

```json
{
  "data":{
    "deleteUser":{
      "id":1,
      "name":"Price Weber",
      "age":37,
      "gender":"male"
    }
  }
}
```

### 4. 🥊 Test Cases for GraphQL.

If are wondering how to write test cases for GraphQL. Here is an example for you [starWarsValidation-test.js](https://github.com/graphql/graphql-js/blob/master/src/__tests__/starWarsValidation-test.js).

### 5. 🏆 References

- [Best practices for GraphQL](https://graphql.org/learn/best-practices/) - Serving over HTTP, Pagination, Caching etc.
- [Running an Express GraphQL Server](https://graphql.org/graphql-js/running-an-express-graphql-server/)
- [GraphQL vs REST](https://philsturgeon.uk/api/2017/01/24/graphql-vs-rest-overview/).

Thanks for reading so far 😙. Please do give a star for this repo if you liked it.

##### MIT licensed
