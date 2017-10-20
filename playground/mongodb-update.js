const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server.");
    }
    console.log("Connected to MongoDB server");

    db.collection("Todos").findOneAndUpdate({
        _id: ObjectID("59e945c39854370f48fb89e1")
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });

    db.close();
});