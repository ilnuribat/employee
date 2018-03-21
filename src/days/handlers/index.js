// adding one day to one employee
const { Day } = require('../model');

module.exports = {
  async ADD_DAY(data) {
    return Day.create(data);
  },
};
