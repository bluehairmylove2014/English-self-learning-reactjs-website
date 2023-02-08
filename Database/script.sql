DROP TABLE IF EXISTS accounts;

CREATE TABLE accounts (
	accid int PRIMARY KEY,
	email text,
	dname text,
	psw text,
	rol text,
	stts int,
	avt text,
	sex text
);

INSERT INTO accounts values
(1, 'dm410@gmail.com', 'Duong Minh', 123, 'user', 0, '1.png', 'male'),
(2, 'pd2808@gmail.com', 'Phuc Dat', 123, 'user', 0, 'man_default.png', 'male'),
(3, 'baphuong@gmail.com', 'Nguyen Ba Phuong', 123, 'user', 0, 'woman_default.png', 'female');

-- UPDATE account SET psw='123' WHERE psw='123456';

SELECT *  FROM accounts;