#creación de la base de datos GestionEstudiantes
CREATE DATABASE GestionEstudiantes;
USE GestionEstudiantes;

#creación de la tabla curso
CREATE TABLE cursos (
    cod_curso INT(12) PRIMARY KEY,
    nombre_curso VARCHAR(100) NOT NULL,
    descripcion TEXT,
    duracion INT CHECK (duracion > 0)
);
#creación de la tabla estudiantes
CREATE TABLE estudiantes (
    DocumentoIdentidad INT(12)  PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    edad INT CHECK (edad >= 12),
    correo VARCHAR(100) NOT NULL,
    cod_curso int(12),
    FOREIGN KEY (cod_curso) REFERENCES cursos(cod_curso)
);

#creacion tabla calificaciones

CREATE TABLE calificaciones (
    cod_calificacion INT(12) PRIMARY KEY,
    DocumentoIdentidad INT(12),
    cod_curso INT(12),
    nota DECIMAL(4,2) CHECK (nota BETWEEN 0 AND 5),
    fecha DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (DocumentoIdentidad) REFERENCES estudiantes(DocumentoIdentidad),
    FOREIGN KEY (cod_curso) REFERENCES cursos(cod_curso)
);

#ingresar datos de curso
INSERT INTO cursos (cod_curso, nombre_curso, descripcion, duracion) VALUES
(100000000001, 'Python', 'Curso de fundamentos de programación en phyton', 60),
(100000000002, 'SQL', 'Curso de fundamentos de sql', 50),
(100000000003, 'fronted', 'basico de HTML, CSS y JavaScript', 80);

#ingresar datos estudiantes
INSERT INTO estudiantes (DocumentoIdentidad, nombre, edad, correo, cod_curso) VALUES
(100000000012, 'Pablo Jose Torres', 19, 'maria@gmail.com', 100000000003),
(100000000013, 'Juan David Pérez', 20, 'juanperez@gmail.com', 100000000002),
(100000000011, 'Laura Sofia Gómez', 18, 'laura.gomez@gmail.com', 100000000001);

#insertar calificaciones
INSERT INTO calificaciones (cod_calificacion, DocumentoIdentidad, cod_curso, nota) VALUES
(1, 100000000012, 100000000003, 4.5),
(2, 100000000012, 100000000003, 3.9),
(3, 100000000013, 100000000002, 4.2),
(4, 100000000011, 100000000001, 4.8);

#Mostrar todas las calificaciones con nombre del estudiante y curso
SELECT e.nombre AS estudiante, c.nombre_curso, ca.nota, ca.fecha
FROM calificaciones ca
JOIN estudiantes e ON ca.DocumentoIdentidad = e.DocumentoIdentidad
JOIN cursos c ON ca.cod_curso = c.cod_curso;

--  Calcular el promedio de cada estudiante
SELECT e.nombre AS estudiante, 
       ROUND(AVG(ca.nota), 2) AS promedio
FROM calificaciones ca
JOIN estudiantes e ON ca.DocumentoIdentidad = e.DocumentoIdentidad
GROUP BY e.nombre
ORDER BY promedio DESC;

--  Ver cursos con promedio menor a 4.0
SELECT c.nombre_curso, ROUND(AVG(ca.nota), 2) AS promedio_curso
FROM calificaciones ca
JOIN cursos c ON ca.cod_curso = c.cod_curso
GROUP BY c.nombre_curso
HAVING promedio_curso < 4.0;