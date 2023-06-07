require('dotenv').config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const client_id = process.env.GMAIL_client_id;
const client_secret = process.env.GMAIL_client_secret;
const redirect_uri = process.env.GMAIL_redirect_uri;
const refresh_token = process.env.GMAIL_refresh_token;

const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri);
oAuth2Client.setCredentials({ refresh_token });

module.exports = {
  sendMail: (request) => oAuth2Client.getAccessToken()
    .then((accessToken) => {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'wuphfdotcom1@gmail.com',
          clientId: client_id,
          clientSecret: client_secret,
          refreshToken: refresh_token,
          accessToken,
        },
      });
      const mailOptions = {
        from: 'wuphfdotcom1@gmail.com',
        to: `${request.email}`,
        subject: 'WUPHF.COM!',
        text: `${request.message}`,
        html: `<p>${request.message}</p>`,
      };
      transporter.sendMail(mailOptions);
    }),
};
