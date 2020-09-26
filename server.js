const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect databse
connectDB(); 

// Initialize middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res)=>{
    res.send('API Running');
});

// Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000; // look for default port else set to 5000 for local

app.listen(PORT, ()=>{
    console.log(`Server started on PORT ${PORT}`);
});
