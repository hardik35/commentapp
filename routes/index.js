const todosController = require('../controllers').todos;
const todosItemsController = require('../controllers').todoItems;
const shortenURLController = require('../controllers').shortenURL

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/todos', todosController.create);
  app.get('/api/todos', todosController.list);
  app.get('/api/todos/:todoId', todosController.retrieve);
  app.post('/api/todos/:todoId/items', todosItemsController.create);
  app.get('/api/shortenURL/:shortURLKey', shortenURLController.redirectToShortURL);
  app.post('/api/shortenURL', shortenURLController.generateURL);
};