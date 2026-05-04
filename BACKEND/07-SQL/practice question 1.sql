-- practice question 1 --

CREATE DATABASE IF NOT EXISTS collage;

USE collage;

CREATE TABLE teacher(
id INT PRIMARY KEY,
name VARCHAR(50),
subject VARCHAR(30),
salary INT DEFAULT 25000
);

INSERT INTO teacher(id, name, subject, salary)
VALUES
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 4500),
(9, "divya", "physics", 75000);

SELECT * FROM teacher;

SELECT * FROM teacher
WHERE salary > 55000;

ALTER TABLE teacher
CHANGE COLUMN salary ctc INT;

UPDATE teacher 
SET ctc = ctc + ctc * 0.25
WHERE id > 0;

ALTER TABLE teacher
ADD COLUMN city VARCHAR(50) DEFAULT 'Delhi';

ALTER TABLE teacher
DROP COLUMN ctc;