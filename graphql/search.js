require('dotenv').config();
const { Twitter } = require('graphqlhub-schemas');
const { GraphQLSchema, graphql } = require('graphql');
const axios = require('axios');

let schema = new GraphQLSchema({
  query: Twitter.QueryObjectType
});

const search = (req, res) => {
  let { topic } = req.body;

  let query =  `
    {
      search(q: "${topic}", count: 50, result_type: mixed) {
      user {
        name
        screen_name
        profile_image_url
      }
      id
      text
      created_at
    }
  }`;

  graphql(schema, query).then(({ data }) => {
    res.send(data)
  });
};

module.exports = { search };
