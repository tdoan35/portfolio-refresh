const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');

const PORT = 3000;
const app = express();


// Serve the static CSS/JS that the html files requests ----------
// app.use(express.static('assets'));

// GET Request to Root '/' 
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});
// ---------------------------------------------------------------


// 404 Error -----------------------------------------------------
app.use('*', (req, res) => {
  res.sendStatus(404);
});// ------------------------------------------------------------

// Global Error Handler ------------------------------------------
app.use((err, req, res, next) => {
  res.status(500).send('Error from global error handler: ', err);
});
// ---------------------------------------------------------------


// Creating the HTTP server that listens on PORT -----------------
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));