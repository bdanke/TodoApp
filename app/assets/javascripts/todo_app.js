window.TodoApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    new TodoApp.Routers.AppRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TodoApp.initialize();
});
