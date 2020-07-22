require('dotenv').config();
const { Twitter } = require('graphqlhub-schemas');
const { GraphQLSchema, graphql } = require('graphql');
const axios = require('axios');

let schema = new GraphQLSchema({
  query: Twitter.QueryObjectType
});

let query = `
{
  user (identifier: name, identity: "clayallsopp") {
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
  tweet(id: "687433440774459392") {
  text,
  retweets(limit: 2) {
    id,
    retweeted_status {
      id
    }
    user {
      screen_name
    }
  }
}
search(q: "Javascript", count: 1, result_type: mixed) {
  user {
    screen_name
  }
  id
  text
}
}`;
//

const getData = (req, res) => {
  graphql(schema, query).then(({ data }) => {
    res.send(data)
  });
};

module.exports = { getData }
