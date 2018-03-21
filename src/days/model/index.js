// mongoose model
const mongoose = require('mongoose');
const Day = require('./Day');

exports.connect = async function () {
  console.time('connecting to mongo');
  await mongoose.connect(process.env.MONGO_URI);
  console.timeEnd('connecting to mongo');
};

Object.assign(exports, {
  Day,
});
