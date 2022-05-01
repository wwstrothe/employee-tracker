const inquirer = require("inquirer");
const app = require("../server");
const db = require("../db/connection");

const add = {
  // add department
  addDepartment() {
    // get new dept name
    inquirer
      .prompt([
        {
          name: 'newDepartment',
          type: "input",
          message: "What is the name of the new Department?",
          validate: function validateInput(input) {
            return input !== "";
          }
        }
      ])
      // add new dept to database
      .then((answer) => {
        let sql = `INSERT INTO departments (dept_name) VALUES (?)`;

        db.promise()
        .query(sql, answer.newDepartment)
        .then(() => {
          console.log("Your new department has been added!");
          app.promptUser();
        });
      });
  },

}

module.exports = add