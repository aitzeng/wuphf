require('dotenv').config();
const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: process.env.TWITTER_consumer_key,
  appSecret: process.env.TWITTER_consumer_secret,
  accessToken: process.env.TWITTER_access_token_key,
  accessSecret: process.env.TWITTER_access_token_secret,
});

const v2Client = client.v2;

module.exports = {
  tweet: (request) => v2Client.tweet(`${request.message}`),
};
