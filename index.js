// CREATE DATABASE collage;
// USE collage;

// CREATE TABLE Teacher
// (id INT ,
// name VARCHAR(30) NOT NULL,
// sub VARCHAR(30),
// sallary INT DEFAULT 10000);

// ALTER TABLE Teacher
// CHANGE COLUMN id id INT PRIMARY KEY;

// INSERT INTO Teacher
// VALUES
// (23,"ajay","math",50000),
// (47,"bharat","english",60000),
// (18,"chetan","chemestry",45000),
// (9,"divya","physics",75000);

// 1)Select teachers whose sallry is more than 55k
// SELECT name ,sallary
// FROM Teacher
// WHERE sallary >50000;

// 2)Rename the sallary column of teacher table to ctc
// ALTER TABLE Teacher
// CHANGE COLUMN sallary ctc INT;

// 3)Update sallary of all teachers by giving them an increament of 25%
// UPDATE Teacher
// SET ctc =ctc * 1.25;

// SELECT * FROM Teacher;

// 4)Add new columns for teachers called city .the default city should be "Gurgaon"
// ALTER TABLE Teacher
// ADD COLUMN city VARCHAR(30) DEFAULT "Gurgaon"; 

// 5)Delete the ctc column from teacher
// ALTER TABLE Teacher
// DROP COLUMN ctc;

