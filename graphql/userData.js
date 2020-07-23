require('dotenv').config();
const { Twitter } = require('graphqlhub-schemas');
const { GraphQLSchema, graphql } = require('graphql');
const axios = require('axios');

let schema = new GraphQLSchema({
  query: Twitter.QueryObjectType
});

let query = `
{
  user (identifier: name, identity: "reactjs") {
    created_at
    description
    id
    screen_name
    name
    profile_image_url
    url
    tweets_count
    followers_count
    tweets(limit: 10) {
      text,
      id,
      created_at,
      retweet_count,
      retweets {
        id
      },
    }
  }
}`;

const getUserData = (req, res) => {
  graphql(schema, query).then(({ data }) => {
    res.send(data)
  });
};

module.exports = { getUserData }
