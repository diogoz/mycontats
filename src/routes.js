const { Router } = require('express');
const ContactController = require('./app/controllers/ContactController');

const router = Router();

router.get('/contacts',
  // como chamar o middleware
  (request, response, next) => {
    request.appId = "MeuAppID",
      next()
  },
  ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
module.exports = router;
