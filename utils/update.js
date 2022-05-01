const inquirer = require("inquirer");
const db = require("../db/connection");
const app = require("../server");

const update = {
  // update employee's role
  updateEmployeesRole() {
    // gets employees from the employee table
    let sql = `SELECT * FROM employees`;

    db.promise()
      .query(sql)
      .then(([data]) => {
        const employees = data.map(({ id, first_name, last_name }) => ({
          name: first_name + " " + last_name,
          value: id,
        }));

        inquirer
          .prompt([
            {
              type: "list",
              name: "name",
              message: "Which employee would you like to update?",
              choices: employees,
            },
          ])
          // push selected choice to array
          .then((eChoice) => {
            const employee = eChoice.name;
            const params = [];
            params.push(employee);

            // gets roles from roles table
            let sql = `SELECT * FROM roles`;

            db.promise()
              .query(sql)
              .then(([data]) => {
                const roles = data.map(({ id, title }) => ({
                  name: title,
                  value: id,
                }));

                // select employees new role
                inquirer
                  .prompt([
                    {
                      type: "list",
                      name: "role",
                      message: "What is the employee's new role?",
                      choices: roles,
                    },
                  ])
                  // then push selected roles to array
                  .then((roleChoice) => {
                    const role = roleChoice.role;
                    params.push(role);

                    let employee = params[0];
                    params[0] = role;
                    params[1] = employee;

                    // updates the employees role in the db
                    let sql = `UPDATE employees SET role_id = ? WHERE id = ?`;

                    db.promise()
                      .query(sql, params)
                      .then(() => {
                        console.log("This employees role has been updated");
                        app.promptUser();
                      })
                      .catch((error) => console.log(error));
                  });
              });
          });
      });
  },
};

module.exports = update;
