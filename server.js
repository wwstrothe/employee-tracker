const inquirer = require('inquirer');
const db = require('./db/connection');

// import prompts
const list = require('./utils/list')
const add = require('./utils/add')
const update = require('./utils/update')

const promptUser = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choices",
        message: "Please select a task",
        choices: [
          "View all Departments",
          "View all Roles",
          "View all Employees",
          "Add a Department",
          "Add a Role",
          "Add an Employee",
          "Update an Employee",
          "Exit"
        ],
      },
    ])
    .then((answers) => {
      const { choices } = answers;
      // view all departments
      if (choices === "View all Departments") {
        list.listAllDepartments();
      }
      // view all roles
      if (choices === "View all Roles") {
        list.listAllRoles();
      }
      // view all employees
      if (choices === "View all Employees") {
        list.listAllEmployees();
      }
      if (choices === "Add a Department") {
        add.addDepartment();
      }
      if (choices === "Add a Role") {
        add.addRole();
      }
      if (choices === "Add an Employee") {
        add.addEmployee();
      }
      // Exit
      if (choices === "Exit") {
        db.end();
      }
    });
};

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
  promptUser();
});

exports.promptUser = promptUser;