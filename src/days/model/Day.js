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
  type: {
    type: String,
    enum: ['OFFICE', 'REMOTE', 'SICK', 'HOLIDAY'],
    required: true,
  },
  duration: {
    type: Number,
    min: [1, 'measured in minutes, must be at least 1'],
    max: [1440, 'measured in minutes, max value: 24 hours * 60 minutes = 1440'],
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
