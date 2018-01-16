const expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Charles';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toInclude({ text, from });

  });
});

describe('generateLocationMessage', () => {
  it('should generateLocationMessage', () => {

    var from = 'Charles';
    var lat = "12345";
    var lng = "54321";
    var url = `https://www.google.co.uk/maps?q=${lat},${lng}`;

    var message = generateLocationMessage(from, lat, lng);

    expect(message.url).toBe(url);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toInclude({ url });
  })
})