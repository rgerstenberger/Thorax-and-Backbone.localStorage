new (Backbone.Router.extend({
  routes: module.routes,
  index: function(){
  	Application.Collections.todos = new Application.Collections["todoList/Todos"]([

  	]);


  	Application.Collections.todos.create({title: "take out garbage"});
  	var todoView = new Application.Views["todoList/TodoView"]({
  		collection: Application.Collections.todos
  	});
  	Application.setView(todoView);
  }

}));