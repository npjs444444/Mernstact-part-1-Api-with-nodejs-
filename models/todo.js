const mongoose = require("mongoose");

const todoApp = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  check: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: new Date().toLocaleDateString(),
  },
});

module.exports = mongoose.model("todoList", todoApp);
