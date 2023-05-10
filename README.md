# Sabdilahi-lab5

Welcome to SomTech, a social media platform that allows you to connect and message with others through login and signup information. With SomTech, you can easily keep in touch with friends, family, and colleagues.

Getting Started
To begin using SomTech, you'll need to create an account. You can do this by clicking the "signup" button on the homepage and filling in your personal information. Once you've created your account, you can login using your username and password.

Using the Platform
After logging in, you'll be taken to the main feed, where you can view posts from other users. You can also create your own posts by clicking the "create post" button. To message other users, click on their profile and send them a message.

Installation
postgres
node.js

Database Setup

Use psql -U postgres -f server/db/createDatabase.sql to access the postgres database then you will access the postgres database if you don't have password setup, but if you do then your  put password. to create database you can use CREATE DATABASE Name of your database.

Quick Setup

After installing and configuring Node.js and Postgres clone this git repository
git clone your git repository

1: Repo creation and clone
The project should have the following:

a. A .gitignore for Node.js (A good model is the agora one)

b. A README

c. A license (MIT or BSD is recommended, feel free to research some of the others and pick one you feel appropriate).

3. Clone the repository to your development machine

5. Initialize your project with npm init

7.Step 3: .env and .env.example
Make a copy of the .env.example file called .env in the project home directory

change these to the folllowing:

In the .env file:
EMAIL_TOGGLE = false
STRPIE_TOGGLE = false
GITHUB_TOGGLE = false

Save your .env file

Install dependencies
npm i

Start the service
npm start


