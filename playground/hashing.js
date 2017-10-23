const {SHA256} = require("crypto-js");
const jwt = require("jsonwebtoken");

var data = {
    id: 14
};

var token = jwt.sign(data, "secret");
console.log(token);
var decoded = jwt.verify(token, "secret");
console.log(decoded);

/*
var message = "I am user number 3";
var hash = SHA256(message).toString();
console.log(message);
console.log(hash);

var data = {
    id: 4
};

var token = {data, hash: SHA256(JSON.stringify(data) + "some secret").toString()};
token.data.id = 5;

var resultHash = SHA256(JSON.stringify(token.data) + "some secret").toString();


if (resultHash === token.hash) {
    console.log("data not changed");
} else {
    console.log("data changed");
}*/
