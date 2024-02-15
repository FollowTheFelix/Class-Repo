const Todo = require("../models/todo");

function index(req, res) {
  //get all todos
  const todos = Todo.getAll();
  res.render("todos/index.ejs", { todos: todos });
}

function show(req, res) {
  const todo = Todo.getOne(req.params.id);
  res.render("todos/show.ejs", { todo });
}

module.exports = {
  index,
  show,
};
