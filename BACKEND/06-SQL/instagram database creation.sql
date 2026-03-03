-- Create database
CREATE DATABASE instagram_db;

-- Show databases
SHOW DATABASES;

-- Use database
USE instagram_db;

-- Create users table with constraints
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT CHECK (age >= 13),
    followers INT DEFAULT 0,
    following INT DEFAULT 0,
    country VARCHAR(50) DEFAULT 'India',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create posts table with foreign key
CREATE TABLE posts (
    post_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    caption VARCHAR(255),
    likes INT DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Insert data into users table
INSERT INTO users (name, email, age, followers, following, country)
VALUES
('Ganesh', 'ganesh@gmail.com', 21, 500, 300, 'India'),
('Rahul', 'rahul@gmail.com', 25, 800, 400, 'Nepal'),
('Sneha', 'sneha@gmail.com', 19, 1200, 350, 'India'),
('Aman', 'aman@gmail.com', 30, 200, 180, 'USA'),
('Riya', 'riya@gmail.com', 22, 950, 500, 'India');

-- Insert data into posts table
INSERT INTO posts (user_id, caption, likes)
VALUES
(1, 'My first post', 100),
(2, 'Travel Diaries', 250),
(3, 'Coding Life', 500),
(1, 'Gym Motivation', 300);

-- Select all users
SELECT * FROM users;

-- Select distinct ages
SELECT DISTINCT age FROM users;

-- Select specific columns
SELECT name, followers FROM users;

-- Where with comparison operator
SELECT * FROM users WHERE age > 21;

-- Logical AND
SELECT * FROM users WHERE age > 20 AND followers > 500;

-- Logical OR
SELECT * FROM users WHERE country = 'India' OR country = 'Nepal';

-- Between operator
SELECT * FROM users WHERE age BETWEEN 20 AND 25;

-- IN operator
SELECT * FROM users WHERE country IN ('India', 'USA');

-- NOT operator
SELECT * FROM users WHERE NOT country = 'India';

-- Arithmetic operator example
SELECT name, (followers + following) AS total_connections FROM users;

-- Modulus operator
SELECT age, age % 2 AS remainder FROM users;

-- Order by descending with limit
SELECT * FROM users ORDER BY followers DESC LIMIT 3;

-- Order by ascending
SELECT * FROM users ORDER BY followers ASC;

-- Count users
SELECT COUNT(*) AS total_users FROM users;

-- Maximum followers
SELECT MAX(followers) AS highest_followers FROM users;

-- Minimum followers
SELECT MIN(followers) AS lowest_followers FROM users;

-- Average followers
SELECT AVG(followers) AS avg_followers FROM users;

-- Sum of followers
SELECT SUM(followers) AS total_followers FROM users;

-- Group by country
SELECT country, COUNT(*) AS total_users FROM users GROUP BY country;

-- Group by with having
SELECT country, COUNT(*) AS total_users FROM users GROUP BY country HAVING COUNT(*) > 1;

-- using to give permission to update table
SET SQL_SAFE_UPDATES = 0;

-- Update followers
UPDATE users SET followers = followers + 100 WHERE name = 'Ganesh';

-- Delete users with low followers
DELETE FROM users WHERE followers < 250;

-- Add new column bio
ALTER TABLE users ADD bio VARCHAR(255);

-- Rename column name to username
ALTER TABLE users RENAME COLUMN name TO username;

-- Truncate posts table
TRUNCATE TABLE posts;

-- Drop posts table
-- DROP TABLE posts;

-- Rename users table
-- RENAME TABLE users TO instagram_users;

-- Drop database
-- DROP DATABASE instagram_db;