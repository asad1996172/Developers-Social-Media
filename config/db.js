const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

// Useful tips: Use try catch with async await

const connectDB = async() => {
    try{
        await mongoose.connect(db ,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex: true
        });
        console.log('MongoDB connected ...')
    } catch (err){
        console.error(err.message);
        process.exit(1); // exit process with failure
    }
}

module.exports = connectDB;