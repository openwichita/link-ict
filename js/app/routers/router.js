var Backbone = require('backbone'),
    AppView = require('views/app_view'),
    AdminView = require('views/admin_view'),
    ListView = require('views/list_view');

var Router = Backbone.Router.extend({
  routes: {
    '': 'query',
    'list': 'list',
    'admin': 'admin'
  },

  query: function() {
    console.log('entering query route');

    var appView = new AppView();
    appView.render();
  },

  list: function() {
    console.log('entering list route');

    var listView = new ListView();
    listView.render();
  },

  admin: function() {
    console.log('entering admin route');

    var adminView = new AdminView();
    adminView.render();
  }
});

module.exports = Router;
