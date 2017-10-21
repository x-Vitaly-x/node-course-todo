const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

/*
var id = "59ebb457f39bff04e5d91bd6";

if(!ObjectID.isValid(id)) {
    console.log("ID invalid!");
}
*/

/*
Todo.find({
    _id: id
}).then((todos) => {
    console.log("Todos", todos);
}, (err) => {
    console.log("Error", err);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log("Todo", todo);
}, (err) => {
    console.log("Error", err);
});

Todo.findById(id).then((todo) => {
    console.log("Todo", todo);
}, (err) => {
    console.log("Error", err);
});*/

var userId = "59ea3558b10ecd0b1440f109";

User.findById(userId).then((user) => {
    if (user == null) {
        return console.log("User not found");
    }
    console.log("User", user);
}, (err) => {
    console.log("Error", err);
});