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
          name: "newDepartment",
          type: "input",
          message: "What is the name of your new Department?",
          validate: function validateInput(input) {
            return input !== "";
          },
        },
      ])
      // add new dept to db
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

  addRole() {
    // select department names and add create option
    const sql = "SELECT * FROM departments";

    db.promise()
      .query(sql)
      .then(([response]) => {
        let deptNamesArray = [];
        response.forEach((departments) => {
          deptNamesArray.push(departments.dept_name);
        });
        deptNamesArray.push("Create Department");

        inquirer
          .prompt([
            {
              name: "departmentName",
              type: "list",
              message: "Which department is this new role in?",
              choices: deptNamesArray,
            },
          ])
          .then((answer) => {
            // create a new department
            if (answer.departmentName === "Create Department") {
              add.addDepartment();
            }
            // else finish role
            else {
              addRoleResume(answer);
            }
          });

        const addRoleResume = (departmentsData) => {
          inquirer
            .prompt([
              {
                name: "newRole",
                type: "input",
                message: "What is the name of this new role?",
                validate: function validateInput(input) {
                  return input !== "";
                },
              },
              {
                name: "salary",
                type: "input",
                message: "What is the salary of this new role?",
                validate: function validateInput(input) {
                  return input !== "";
                },
              },
            ])
            .then((answer) => {
              let createdRole = answer.newRole;
              let departmentsId;

              response.forEach((departments) => {
                if (departmentsData.departmentsName === departments.dept_name) {
                  departmentsId = departments.id;
                }
              });

              // Add role to db
              let sql = `INSERT INTO roles (title, salary, dept_id) VALUES (?, ?, ?)`;
              let criteria = [createdRole, answer.salary, departmentsId];

              db.promise()
                .query(sql, criteria)
                .then(() => {
                  console.log("New role has been added!");
                  app.promptUser();
                })
                .catch((error) => console.log(error));
            });
        };
      });
  },

};

module.exports = add