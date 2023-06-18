const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Diogo',
    email: 'diogo@mail.com',
    phone: '1232132131',
    category_id: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts)
    })
  }
}

module.exports = new ContactRepository();
