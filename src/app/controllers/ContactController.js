class ContactController {
  index(request, response) {
    // listar todos os registros
    response.send('Send from contract controller');
  }

  show() {
    // obter UM registro
  }

  store() {
    // obter um registro
  }

  update() {
    // editar um registro
  }

  delete() {
    // deletar um registro
  }
}

// Singleton
module.exports = new ContactController();
