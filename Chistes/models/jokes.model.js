const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required!"],
        trim: true,
        minlength: [10, "Setup must be at least 10 characters long"],
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required!"],
        trim: true,
        minlength: [3, "Punchline must be at least 3 characters long"],
    },
}, {
    timestamps: true
});

JokesSchema.plugin(uniqueValidator);

const JokesModel = mongoose.model("Jokes", JokesSchema);

module.exports = JokesModel;

