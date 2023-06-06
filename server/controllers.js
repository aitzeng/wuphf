module.exports = {
  send: (req, res) => {
    postPhone(req)
      .then((message) => {
        res.send(message);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
