const express = require("express");
const bodyParser = require("body-parser");
const {mongoose} = require("./db/mongoose");
const {ObjectID} = require("mongodb");

const {Todo} = require("./models/todo");
const {User} = require("./models/user");

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.status(200).send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get("/todos", (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET /todos/13123
app.get("/todos/:id", (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if (todo == null) {
            return res.status(404).send();
        }
        res.status(200).send({todo});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(port, () => {
    console.log("Started on port " + port);
});

module.exports = {app};