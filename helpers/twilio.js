const { accountSid } = process.env;
const { authToken } = process.env;
const client = require('twilio')(accountSid, authToken);

module.exports = {
  textPhone: (request) => client.messages
    .create({ from: '+18449360246', body: request.message, to: `+1${request.phoneNumber}` }),
  callPhone: (request) => client.calls
    .create({
      twiml: `${request.message}`,
      to: `+1${request.phoneNumber}`,
      from: '+18449360246',
    }),
};
