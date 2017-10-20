const mongoose = require("mongoose");

// User, email required trimmed min length 1
var User = mongoose.model("User", {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {User};