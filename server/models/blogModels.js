const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, 'title is requrired']
    },
    description: {
        type: String,
        require: [true, 'discription is requrired']
    },
    image: {
        type: String,
        require: [true, 'imahe is requrired']
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        require: [true, "user id is required"],
    },
}, { timestamps: true })

const blogModel = mongoose.model("Blog", blogSchema)
module.exports = blogModel;