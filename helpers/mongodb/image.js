const mongoose = require("mongoose");
const { DEFAULT_VALIDATION, URL } = require("./mongooseValidations");

const Image = new mongoose.Schema({
    url: URL,
    alt: {...DEFAULT_VALIDATION, required: false, minLength: 0},
});

module.exports = Image;