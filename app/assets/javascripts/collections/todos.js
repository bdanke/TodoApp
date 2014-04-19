window.TodoApp.Collections.Todos = Backbone.Collection.extend({
	url: "api/todos",
	model: TodoApp.Models.Todo,

	getOrFetch: function(id) {
		var model;
		var todos = this;

		if (model = this.get(id)) {
			return model;
		} else {
			model = new TodoApp.Models.Todo({ id: id });
			model.fetch({
				success: function() { todos.add(model) }
			});
			return model;
		}
	}
});

window.TodoApp.Collections.todos = new TodoApp.Collections.Todos();