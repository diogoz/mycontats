const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // listar todos os registros
    const contacts = await ContactRepository.findAll();
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

  store() {
    // obter um registro
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
