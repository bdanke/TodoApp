window.TodoApp.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "index",
		"todos/new": "newTodo",
	},

	index: function() {
		var IndexView = new TodoApp.Views.IndexView({
			collection: TodoApp.Collections.todos
		});

		TodoApp.Collections.todos.fetch();
		this._swapView(IndexView);
	},

	newTodo: function() {
		var NewView = new TodoApp.Views.NewView();
		this._swapView(NewView);
	},

	_swapView: function(view) {
		if (this.currentView) {
			this.currentView.remove();
		}
		this.currentView = view;

		$("#content").html(view.render().$el);
	}
});