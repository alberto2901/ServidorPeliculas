CREATE DATABASE tfg_peliculas;

USE tfg_peliculas;

CREATE TABLE films{
    id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR (180),
    imagen VARCHAR (200),
    calificacion INT (10),
    info VARCHAR (200),
    genre VARCHAR (100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
}

DESCRIBE films;