const express = require('express');
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'mydatabase',
  user: 'postgres',
  password: '',
});

const app = express();

// Retrieve all posts
app.get('http://localhost:1337/api/post', async (req, res) => {
  try {
    const query = 'SELECT * FROM posts';
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Create a new post
app.post('http://localhost:1337/api/post', async (req, res) => {
  const { title, body } = req.body;
  try {
    const query = 'INSERT INTO posts (title, body) VALUES ($1, $2)';
    await pool.query(query, [title, body]);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
