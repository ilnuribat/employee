const _ = require('lodash');
const { Day } = require('../model');

async function ADD_DAY(data) {
  return Day.create(data);
}

async function GET_DAYS(data) {
  const params = _.pick(data, ['employeeId', 'type', 'duration']);

  if (data.from) {
    params.date = {
      $gte: data.from,
    };
  }
  return Day.find(params).sort({ date: 1 });
}

module.exports = {
  ADD_DAY,
  GET_DAYS,
};
