CREATE DATABASE collage;

CREATE DATABASE IF NOT EXISTS instagram;

USE instagram;

CREATE TABLE user (
id INT,
age INT,
name VARCHAR(30) NOT NULL,
email VARCHAR(50) UNIQUE,
followers INT DEFAULT 0,
following INT,
CONSTRAINT CHECK (age >= 13),
PRIMARY KEY (id)
);

INSERT INTO user
(id, age, name, email)
VALUES
(10, 20, "raman", "bibekverma21@gmail.com");

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 22, "bibek", "bibekverma21@gmail.com", 123, 334),
(2, 21, "stranger", "stranger@711gmail.com", 500, 1),
(3, 17, "prakash", "prakash21@gmail.com", 153, 534),
(4, 24, "ganesh", "ganesh23@gmail.com", 433, 284);

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(5, 14, "rahul", "rahul34@gmail.com", 123, 334),
(6, 15, "cuti", "cuti24@gmail.com", 500, 1);

INSERT INTO user
(id, name, email, following)
VALUES
(7, "manoj", "ganeshverma21@gmail.com", 434);

ALTER TABLE user
ADD COLUMN city VARCHAR(25) DEFAULT "Delhi";

ALTER TABLE user
DROP COLUMN age;

SELECT name, age, email, followers
FROM user
ORDER BY followers ASC;

SELECT age, max(followers)
FROM user
GROUP BY age
HAVING max(followers) > 200
ORDER BY age DESC;

UPDATE user
SET followers = 700
WHERE age = 17;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM user
WHERE id = 3;

-- WHERE email NOT IN ("prakash21@gmail.com", "ganesh23@gmail.com", "abcd@dhdif.com");-- 

ALTER TABLE instaUser
RENAME TO user;

ALTER TABLE user
CHANGE COLUMN subscribert subscriber INT DEFAULT 0;

ALTER TABLE user
MODIFY subscriber INT DEFAULT 5;

SELECT id, name, email, followers FROM user;
SELECT * FROM user;

CREATE TABLE post (
id INT PRIMARY KEY,
content VARCHAR(100),
user_id INT,
FOREIGN KEY (user_id) REFERENCES user(id)
);