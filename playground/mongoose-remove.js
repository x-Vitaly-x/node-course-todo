const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

// Todo.findOneAndRemove({
//     _id: "59ebc09a551bfa09787064b0"
// }).then((res) => {
//     console.log(res);
// });
//
// Todo.findByIdAndRemove("59ebc09a551bfa09787064b0").then((res) => {
//     console.log(res);
// });


