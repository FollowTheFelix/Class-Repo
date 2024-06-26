// Require Modules
const express = require("express");
const path = require("path");

const todoDb = require("./data/todo-db");

// Create Express app
const app = express();

//Configure the app
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Mount middleware

//Mount routes
app.get("/", function (req, res) {
  res.redirect("/home");
});

app.get("/home", function (req, res) {
  res.render("home.ejs");
});

app.get("/todos", function (req, res) {
  res.render("todos/index.ejs", { todos: todoDb.getAll() });
});

//Tell the app to listen on a port
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
