/* File to hole all sql requests to test */

/*list all departments*/
SELECT id, dept_name AS Departments FROM departments;
/*list all roles*/
SELECT id, title AS titles, salary FROM roles;
/*list all employees*/
SELECT e.id, e.first_name, e.last_name, title, dept_name AS department, salary,
  CONCAT (m.first_name, ' ', m.last_name) as manager
  FROM employees e
  LEFT JOIN employees m ON e.manager_id = m.id
  LEFT JOIN roles r ON e.role_id = r.id
  LEFT JOIN departments d ON d.id = dept_id;
