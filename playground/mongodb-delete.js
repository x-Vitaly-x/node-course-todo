const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server.");
    }
    console.log("Connected to MongoDB server");

    // delete many
    // db.collection("Todos").deleteMany({
    //     text: "Eat Lunch"
    // }).then((res) => {
    //     console.log(res);
    // });

    // delete one
    // db.collection("Todos").deleteOne({
    //     text: "Eat Lunch"
    // }).then((res) => {
    //     console.log(res);
    // });

    // find one and delete
    // db.collection("Todos").findOneAndDelete({
    //     completed: false
    // }).then((res) => {
    //     console.log(res);
    // });

    // db.collection("User").deleteMany({
    //     name: "Andrew"
    // });

    db.collection("Users").findOneAndDelete({
        _id: new ObjectID("59e93a5a51f07504c747735f")
    }).then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    });

    db.close();
});