const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log(`Connecting to MongoDB at: ${process.env.MONGO_URI}`);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    if (error.name === 'MongoNetworkError') {
      console.log(`MongoDB Connection Error: Check your MongoDB server or network settings.`.red.bold);
    } else if (error.name === 'MongoError' && error.message.includes('authentication')) {
      console.log(`MongoDB Authentication Error: Check your username and password.`.red.bold);
    } else {
      console.log(`MongoDB Connection Error: ${error.message}`.red.bold);
    }
    process.exit(1);
  }
};

module.exports = connectDB;