CREATE DATABASE IF NOT EXISTS autor_novela;
use autor_novela;
CREATE TABLE autor (
    id_autor INT(4) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    edad INT(3) DEFAULT NULL,
    PRIMARY KEY (id_autor)
);
DESCRIBE autor;

INSERT INTO autor(`id_autor`,`name`,`edad`) VALUES (1,'Danny',21);
INSERT INTO autor(`id_autor`,`name`,`edad`)  VALUES (2,'Johanna',23);

