const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Diogo',
    email: 'diogo@mail.com',
    phone: '1232132131',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Diogo Henrique',
    email: 'diogohenrique@mail.com',
    phone: '123123123',
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts)
    })
  }
  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    })
  }
  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);

      resolve();
    })
  }
}

module.exports = new ContactRepository();
