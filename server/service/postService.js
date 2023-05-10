console.log("postService] initialized");

const { Pool } = require('pg');
const { app } = require('express');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'mydatabase',
  user: 'postgres',
  password: '',
});

// creates the table
createTable("posts", "title VARCHAR(255), body VARCHAR(255)");

async function createTable(name,params) {
    const query = {
        text: 'CREATE TABLE IF NOT EXISTS ' + name + ' (' + params + ');'
    }
    await makeQuery(query);
}

// adds a post 
exports.addPost = async function(title, body){
    const query = {
        text: 'INSERT INTO posts(title, body) VALUES($1, $2)',
        values:[title, body],
      }      
    await makeQuery(query);
}

// removes a post 
exports.removePost = async function(id) {
    const query = {
        text: 'DELETE FROM posts WHERE id = $1',
        values: [id],
      }      
    await makeQuery(query);
}

// grabs all posts 
exports.getAllPosts = async function(){
    const query = { text: "SELECT * FROM posts" };
    var response;
    try{
        response = await makeQuery(query);
        return response.rows;
    } catch(err){
        console.log(err);
    }
}

// controls responses and promises
async function makeQuery(query){
    var response;
    try{
        console.log(query);
        response = await pool.query(query);
        console.log(response);
        return response.rows[0];
    }catch(err){
        console.log(err);
    }
}
