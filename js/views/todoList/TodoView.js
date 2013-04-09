Application.View.extend({
  name: "todoList/TodoView",
  events: {
  	"submit form": function(event){
  		event.preventDefault();
  		Application.Collections.todos.create(this.serialize());
  		$('input').val('');
  	},
  	'change input[type="checkbox"]': function(event) {
	  	var model = $(event.target).model();
	  	model.set({done: event.target.checked});
	  	model.save();
	},
	'click button': function(event) {
	  	var model = $(event.target).model();
	  	model.destroy();
	}
  }
});

// Instances of this view can be created by calling:
// new Application.Views["todoList/TodoView"]()