const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to mongDB`);
    } catch (error) {
        console.log(`Mongo connect error ${error}`);
    }
}
module.exports = connectDB;