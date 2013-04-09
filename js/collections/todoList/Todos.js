Application.Collection.extend({
  name: "todoList/Todos",
  model: Application.Models["todoList/Todo"],
  localStorage: new Backbone.LocalStorage("todos-backbone")
});

// Instances of this collection can be created by calling:
// new Application.Collections["todoList/Todos"]()