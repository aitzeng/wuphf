const { accountSid } = process.env;
const { authToken } = process.env;
const client = require('twilio')(accountSid, authToken);

const postPhone = (request) => {
  client.messages
    .create({ from: '+18449360246', body: request.body, to: request.phoneNumber });
};

module.exports = postPhone;
