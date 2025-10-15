const express = require('express');
let mysql = require('mysql');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: '3306',
    password: ':4GuNg210105182040',
    database: 'mahasiswa'
})

db.connect((err) => {
    if(err){
      console.log('Error mysql' + err.stack);
      return;
    }
    console.log('Koneksi mysql berhasil');
});
const app = express();