const { accountSid } = process.env;
const { authToken } = process.env;
const client = require('twilio')(accountSid, authToken);

module.exports = {
  postPhone: (request) => client.messages
    .create({ from: '+18449360246', body: request.message, to: `+1${request.phoneNumber}` }),

};
