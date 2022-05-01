INSERT INTO departments 
  (dept_name)
VALUES 
  ('None'),
  ('Wizengamot'), 
  ('Executive'), 
  ('Education'), 
  ('Pupil'), 
  ('Alumni'), 
  ('Deceased');

INSERT INTO roles 
  (title, salary, dept_id)
VALUES 
  ('None', 0, 1),
  ('Headmaster', 155000, 2),
  ('Deputy-head', 150000, 3),
  ('Head of House', 120000, 3),
  ('Professor', 100000, 4),
  ('Prefect', 500, 5),
  ('Student', 0, 5),
  ('Alumni', 0, 6),
  ('Ghost', 0, 7);

INSERT INTO employees 
  (first_name, last_name, role_id, manager_id)
VALUES 
  ('No', 'Manager', 1, 1),
  ('Albus', 'Dumbledore', 2, 1),
  ('Minerva', 'McGonagall', 3, 2),
  ('Severus', 'Snape', 4, 2),
  ('Filius', 'Flitwick', 4, 2),
  ('Pomona', 'Sprout', 4, 2),
  ('Rubeus', 'Hagrid', 4, 2),
  ('Percy', 'Weasley', 5, 3),
  ('Harry', 'Potter', 7, 3),
  ('Ron', 'Weasley', 7, 3),
  ('Hermione', 'Granger', 7, 3),
  ('Neville', 'Longbottom', 7, 3),
  ('Arthur', 'Weasley', 8, 1),
  ('Molly', 'Weasley', 8, 1),
  ('Remus', 'Lupin', 8, 1),
  ('Sirius', 'Black', 8, 1),
  ('Nicholas', 'de Mimsy-Porpington', 9, 1),
  ('Helena', 'Ravenclaw', 9, 1);