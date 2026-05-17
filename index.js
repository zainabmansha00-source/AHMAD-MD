const express = require('express');
const app = express();
__path = process.cwd();
const PORT = process.env.PORT || 3000;

// Import modules
const miniRoutes = require('./mini');

// Parse JSON bodies
app.use(express.json());

// Routes
app.use('/api', miniRoutes);       // AHMAD-MD routes

// main.html
app.get('/', (req, res) => {
    res.sendFile(__path + '/mini.html');
});

// Start server
app.listen(PORT, () => {
    console.log(` Server running on port ${PORT} `);
});

module.exports = app;
