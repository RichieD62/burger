CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
id INTEGER NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (200),
devoured BOOLEAN DEFAULT FALSE,
PRIMARY KEY(id)
);

UPDATE burgers SET devoured = false WHERE id = 6