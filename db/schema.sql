DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT,
    burger_name TEXT,
    devoured BOOL,
    PRIMARY KEY
    (id)
);

    SELECT *
    FROM burgers_db.burgers;