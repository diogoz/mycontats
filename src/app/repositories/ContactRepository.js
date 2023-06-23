const { v4 } = require('uuid');
const db = require('../../database');

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
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
    console.log(direction);
    const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${direction}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM CONTACTS WHERE id = $1', [id])
    return row;
  }
  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM CONTACTS WHERE email = $1', [email])
    return row;
  }
  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);

      resolve();
    })
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1,$2,$3,$4)
      RETURNING *
    `, [name, email, phone, category_id]);
    return row;
  };


  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updateContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };
      contacts = contacts.map((contact) => (
        contact.id === id ? updateContact : contact
      ))
      resolve(updateContact);
    });
  }


}

module.exports = new ContactRepository();
