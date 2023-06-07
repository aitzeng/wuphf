const BarkModel = require('../db/mongoDB.js');

module.exports = {
  addDb: (request) => {
    const newBark = new BarkModel(request);
    return newBark.save();
  },
  get: () => BarkModel.find({}).sort({ _id: -1 }).limit(10).exec(),
};
