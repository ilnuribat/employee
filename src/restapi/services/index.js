const request = require('request-promise-native');

const defaults = request.defaults({
  method: 'POST',
  json: true,
  headers: {
    'content-type': 'application/json',
  },
});

const days = defaults.defaults({
  uri: `http://localhost:${process.env.HTTP_PORT_DAYS}`,
});

const employees = defaults.defaults({
  uri: `http://localhost:${process.env.HTTP_PORT_EMPLOYEES}`,
});

module.exports = {
  days: {
    async get(data) {
      return days({
        body: {
          action: 'GET_DAYS',
          data,
        },
      });
    },
  },
  employees: {
    async get(data) {
      return employees({
        body: {
          action: 'GET_EMPLOYEES',
          data,
        },
      });
    },
  },
};

