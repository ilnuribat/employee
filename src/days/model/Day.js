const mongoose = require('mongoose');
const moment = require('moment');

const { Schema } = mongoose;

const DaySchema = new Schema({
  employeeId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

DaySchema.index({
  employeeId: 1,
  date: 1,
}, {
  unique: true,
});

DaySchema.pre('save', function () {
  // Храним только в формате даты, без времени
  this.date = moment(moment(this.date).format('YYYY-MM-DD')).toDate();
});


const Day = mongoose.model('days', DaySchema);

module.exports = Day;
