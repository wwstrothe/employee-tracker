/* File to hold all sql requests to test */

/* list all departments */
SELECT id, dept_name AS Departments 
  FROM departments

/* list all roles */
SELECT id, title AS titles, salary 
  FROM roles;

/* list all employees */
SELECT e.id, e.first_name, e.last_name, title, dept_name AS department, salary,
  CONCAT (m.first_name, ' ', m.last_name) as manager
  FROM employees e
  LEFT JOIN employees m ON e.manager_id = m.id
  LEFT JOIN roles r ON e.role_id = r.id
  LEFT JOIN departments d ON d.id = dept_id;

/* add department */
INSERT INTO departments (dept_name) 
  VALUES ?

/* add role */
INSERT INTO roles (title, salary, dept_id)
  VALUES (?, ?, ?)

/* add employee */
INSERT INTO employees (first_name, last_name, role_id, manager_id)
  VALUES (?, ?, ?, ?)

/* update employee's role */
UPDATE employees SET role_id = ? WHERE id = ?

/* update employee's manager */
UPDATE employees SET manager_id = ? WHERE id = ?

/* view employees by department */
SELECT employee.first_name, employee.last_name, department.name AS department
  FROM employee 
  LEFT JOIN roles ON employee.role_id = roles.id 
  LEFT JOIN department ON roles.department_id = department.id

/* view employees by manager */
SELECT e.id, e.first_name, e.last_name, 
  CONCAT (manager.first_name, " " ,manager.last_name) AS manager
  FROM employees e
  LEFT JOIN employees manager ON e.manager_id = manager.id 
  ORDER BY manager;

/* delete a department */
DELETE FROM departments WHERE id = ?

/* delete a role */
DELETE FROM roles WHERE id = ?

/* delete an employee */
DELETE FROM employees WHERE id = ?

/* view the departments budget */
SELECT department_id AS id, department.name AS department,
  SUM(salary) AS budget
  FROM roles
  JOIN department ON roles.department_id = department.id GROUP BY department_id
