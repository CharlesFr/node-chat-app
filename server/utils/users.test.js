const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();

    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React course'
    }, {
      id: '3',
      name: 'Charlotte',
      room: 'Node course'
    }]
  })

  it('should remove a user', () => {
    var resUser = users.removeUser('1');

    expect(resUser.id).toBe('1');
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });



  it('should find a user', () => {
    var resUser = users.getUser(users.users[0].id);
    expect(resUser.id).toEqual(users.users[0].id);
  });

  it('should return names for node course', () => {
    var usersList = users.getUserListRoom('Node course');
    expect(usersList.length).toBe(2);
    expect(usersList).toEqual(['Mike', 'Charlotte']);

  })

})