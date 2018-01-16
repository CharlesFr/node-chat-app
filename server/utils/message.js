const moment = require('moment');

var generateMessage = (from, text) => {
  return { from, text, createdAt: moment().valueOf() };
};

var generateLocationMessage = (from, lat, lng) => {
  console.log('MESSAGE:', lat, lng);
  return {
    from,
    url: `https://www.google.co.uk/maps?q=${lat},${lng}`,
    createdAt: moment().valueOf()
  }
};

module.exports = { generateMessage, generateLocationMessage };