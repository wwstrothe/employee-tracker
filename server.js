const db = require('./db/connection');
// const inquirer = require('inquirer');
// const mysql = require('mysql');

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
});