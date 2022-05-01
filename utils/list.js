require('console.table');
const app = require('../server');
const db = require('../db/connection');

const list = {
  // list all departments
  listAllDepartments() {
    const sql = `SELECT id as "ID", dept_name AS "dept_name" FROM departments`;

    db.promise()
    .query(sql)
    .then(([response]) => {
      console.table(response);
      app.promptUser();
    })
    .catch((error) => console.log(error));
  },

}

module.exports = list;