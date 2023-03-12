const mysql = require('mysql');
const express = require('express');
const ejs = require('ejs');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'zole'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
});

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) throw error;
    res.render('users', { users: results });
  });
});

app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('Server started on port 3000.');
});