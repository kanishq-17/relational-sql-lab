CREATE TABLE courses(
    id SERIAL PRIMARY KEY,
    title VARCHAR(250) NOT NULL,
   course_owner VARCHAR(200) NOT NULL,
    availability  BOOLEAN,
    level VARCHAR(50)
);

INSERT INTO courses(title, course_owner, availability, level)
VALUES 
("The Art of Animation using GSAP", 'Kanishq Sodhani', true, 'Beginner'),
('Power of Backend', 'Rajat Sen', true, 'Intermediate'),
('Modern Frameworks', 'Ritik Raj Singh', false, 'Advanced' );