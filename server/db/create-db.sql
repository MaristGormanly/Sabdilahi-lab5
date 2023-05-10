CREATE DATABASE mydatabase;
GRANT ALL PRIVLIGES ON DATABASE mydatabase to mydatabase;
GRANT CONNECT ON DATABASE mydatabase to postgress;
USE mydatabase;



\c mydatabase;

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL
);

