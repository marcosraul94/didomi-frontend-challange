const dumbData = [
  { name: 'Bojack Horseman', email: 'bojack@horseman.com', agreements: ['Receive newsletter', 'Be shown targeted ads'] },
  { name: 'Princess Carolyn', email: 'princess@manager.com', agreements: ['Receive newsletter'] },
  { name: 'SpongeBob', email: 'spongebob@nick.com', agreements: ['Receive newsletter', 'Be shown targeted ads'] },
  { name: 'Patrick Star', email: 'patrick@nick.com', agreements: ['Receive newsletter', 'Be shown targeted ads'] },
  { name: 'Plankton', email: 'planton@nick.com', agreements: ['Receive newsletter', 'Be shown targeted ads'] },
  { name: 'Sandy', email: 'sandy@nick.com', agreements: ['Receive newsletter', 'Be shown targeted ads'] },
];

class MockedDB {
  constructor(data) {
    this.data = data;
  }

  update(newData) {
    this.data = newData;
  }
}

const mockedDb = new MockedDB(dumbData);

export default mockedDb;
