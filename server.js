const express = require("express");
const app = express();
const PORT = 4000;
const userData = require("./MOCK_DATA.json");
const graphql = require("graphql");
const {graphqlHTTP} = require("express-graphql");



/**
 * What is a Schema ?
 Schema is just a combination between mutations and queries

 * What is  Queries ? 
 Queries is just like in a database it means (e.g:"GET" "getting information")

 * What is a mutation ?
 When I have a mutation i'm trying to create, update, or delete data
 */


//Creating a GraphQL Schema 
const RootQuery = "query"
const Mutation = "mutation"

const schema = new GraphQLSchema({query: RootQuery, mutation: Mutation})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log('Your server is running!');
});