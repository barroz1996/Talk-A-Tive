const express = require("express");
const {chats} = require("./data/data")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes")
const chatRoutes = require("./routes/chatRoutes")

const {notFound,errorHandler} = require('./middleware/errorMiddleware')


dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to accept Json Data

app.get('/', (req,res)=>{
  res.send("API is running")
})

app.use('/api/user',userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`Server started on PORT ${PORT}`.yellow.bold));