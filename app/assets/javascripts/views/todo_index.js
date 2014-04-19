window.TodoApp.Views.IndexView = Backbone.View.extend({
	template: JST["todos/index"],

	events: {
		"click button": "removeItem"
	},

	removeItem: function(event) {
		var todo = this.collection.get($(event.currentTarget).val());
		this.collection.remove(todo);
		todo.destroy();
	},

	initialize: function() {
		this.listenTo(this.collection, "sync add remove", this.render)
	},

	render: function() {
		var renderedContent = this.template({
			todos: this.collection
		})

		this.$el.html(renderedContent);
		return this;
	}
});