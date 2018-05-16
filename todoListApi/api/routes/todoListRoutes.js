'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  app.route('/login')
    .post(todoList.login);


  app.route('/createAccount')
    .post(todoList.create_account);
};
