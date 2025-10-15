const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: '',
  database: 'mahasiswa'
});

db.connect((err) => {
  if (err) {
    console.log('Error mysql: ' + err.stack);
    return;
  }
  console.log('Koneksi mysql berhasil');
});

app.get('/biodata', (req, res) => {
  const query = 'SELECT * FROM biodata';
  db.query(query, (err, results) => {
    if (err) {
      console.error('❌ Error query GET:', err);
      res.status(500).json({ error: 'Gagal mengambil data' });
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
