CREATE TABLE students(
    id SERIAL PRIMARY KEY
    fullName VARCHAR(150),
    age INT,
    marks INT
);

-- Sample data
INSERT INTO students(fullName, age, marks)
VALUES
('Kanishq Sodhani', 22, 85)
('Rajat Sen', 23, 90)
('Ritik Raj Sing', 23, 92)