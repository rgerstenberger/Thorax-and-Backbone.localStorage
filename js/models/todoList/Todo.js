Application.Model.extend({
  name: "todoList/Todo",
  defaults: {
  	title: "",
  	done: false
  }
});

// Instances of this model can be created by calling:
// new Application.Models["todoList/Todo"]()