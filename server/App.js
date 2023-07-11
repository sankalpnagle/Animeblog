const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//env config
dotenv.config()

//router import
const userRoutes = require('./routes/userRoute')
const blogRoutes = require('./routes/blogRoutes')

//MongoDB connection
connectDB();

//rest object
const app = express()

//middleware
app.use(cors())
app.use(express.json())
// app.use(morgan())

//routes
app.use('/api/user', userRoutes);
app.use('/api/blog', blogRoutes);

//Port
const PORT = process.env.PORT || 8080;
//listen
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})