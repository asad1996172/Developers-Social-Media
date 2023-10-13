const mongoose = require('mongoose');

const db = process.env.MONGO_URI

// Useful tips: Use try catch with async await

const connectDB = async() => {
    try{
        await mongoose.connect(db, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false
        });
        console.log('MongoDB connected ...')
    } catch (err){
        console.error(err.message);
        process.exit(1); // exit process with failure
    }
}

module.exports = connectDB;