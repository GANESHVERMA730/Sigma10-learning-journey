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

SELECT id, name, email, followers FROM user;
SELECT * FROM user;

CREATE TABLE post (
id INT PRIMARY KEY,
content VARCHAR(100),
user_id INT,
FOREIGN KEY (user_id) REFERENCES user(id)
);