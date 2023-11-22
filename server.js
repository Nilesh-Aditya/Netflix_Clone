const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');

const app = express();


app.use(express.json());

const PORT = process.env.PORT || 4000;

// app.use('/api', require('./routes/api'));


if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));