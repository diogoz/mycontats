const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // listar todos os registros
    const contacts = await ContactRepository.findAll();
    // retornando a propriedade do middleware
    response.send(request.appId);
    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params
    const contact = await ContactRepository.findById(id);

    if (!contact) {
      //Status 404: Not Found
      return response.status(404).json({ error: 'Contact not found' })
    }
    response.json(contact);
  }

  async store(request, response) {
    // obter um registro
    const {
      name, email, phone, category_id
    } = request.body;

    const contactExists = await ContactRepository.findByEmail(email)

    if (contactExists) {
      return response.status(400).json({ error: 'This email already been taken' })
    }
    const contact = await ContactRepository.create({
      name, email, phone, category_id
    })
    response.json(contact);
  }

  update() {
    // editar um registro
  }

  async delete(request, response) {
    const { id } = request.params

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      //Status 404: Not Found
      return response.status(404).json({ error: 'Contact not found' })
    }
    await ContactRepository.delete(id);
    response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
