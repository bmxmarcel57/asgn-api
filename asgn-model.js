const mongoose = require("mongoose");

var assignmentSchema = mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    assignmentName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

var Assignment = module.exports = mongoose.model("assignment", assignmentSchema);
module.exports.get = function (callback, limit) {
    Assignment.find(callback.limit(limit));
}