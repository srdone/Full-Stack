var family = [
  {name: 'Stephen', age: 33, relationship: 'self'},
  {name: 'Tiffany', age: 32, relationship: 'wife'},
  {name: 'Gustavo', age: 15, relationship: 'son'},
  {name: 'Giovanni', age: 7, relationship: 'son'},
  {name: 'Brandon', age: 5, relationship: 'son'},
  {name: 'Matthew', age: 3, relationship: 'son'},
  {name: 'Timothy', age: 0, relationship: 'son'}
];

var friends = [
  {name: 'Jed', age: 33, yearmet: 1987},
  {name: 'Dave', age: 60, yearmet: 2007}
];

var activities = ['cycling', 'reading', 'programming'];

var me = {
  name: 'Stephen',
  height: 66,
  age: 33,
  movie: 'Mr Hollands Opus',
  artist: 'James Christensen',
  food: 'Cous Cous'
};

module.exports.getFriends = function() {
  return friends;
};

module.exports.addFriend = function(friend, cb) {
  friends.push(friend);
  cb();
};

module.exports.getFamily = function() {
  return family;
};

module.exports.addFamilyMember = function(familyMember, cb) {
  family.push(familyMember);
  cb();
};


