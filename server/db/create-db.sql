CREATE DATABASE mydatabase;

USE mydatabase;

\c mydatabase;

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL
);

