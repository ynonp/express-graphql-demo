var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var resolver = require('./resolvers/tasks');

var schema = buildSchema(`
  type Query {
    tasks: [Task],
    task(id: Int!): Task
  }

  type Task {
    title: String,
    description: String,
    done: Boolean,
  }

  type Mutation {
    toggleTask(id: Int!): Task
  }
`);

var indexRouter = require('./routes/index');

var app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true,
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
