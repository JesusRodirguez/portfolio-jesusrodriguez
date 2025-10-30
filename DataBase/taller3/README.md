#  Sistema de Gestión de Estudiantes (SQL)

Este proyecto presenta un **modelo relacional completo** para gestionar información de **estudiantes, cursos y calificaciones**.  
Fue desarrollado utilizando **MySQL**, con un enfoque educativo y profesional para mostrar dominio en diseño de bases de datos, relaciones y consultas SQL.

---

##  Descripción del Proyecto

La base de datos **`GestionEstudiantes`** permite administrar los siguientes aspectos:

-  **Cursos:** registro de los cursos ofrecidos, con nombre, descripción y duración.  
- **Estudiantes:** información básica de los estudiantes y el curso al que pertenecen.  
-  **Calificaciones:** notas obtenidas por los estudiantes en los diferentes cursos.

---

## Estructura del Proyecto

### Tablas Principales

| Tabla | Descripción | Clave primaria | Relaciones |
|-------|--------------|----------------|-------------|
| **cursos** | Contiene la información de los cursos. | `cod_curso` | 1 a N con `estudiantes` y `calificaciones` |
| **estudiantes** | Almacena los datos personales de los estudiantes. | `DocumentoIdentidad` | N a 1 con `cursos` |
| **calificaciones** | Registra las notas de cada estudiante en los cursos. | `cod_calificacion` | N a 1 con `estudiantes` y `cursos` |

---

##  Modelo Relacional

```plaintext
cursos (cod_curso, nombre_curso, descripcion, duracion)
      │
      ├──< estudiantes (DocumentoIdentidad, nombre, edad, correo, cod_curso)
      │
      └──< calificaciones (cod_calificacion, DocumentoIdentidad, cod_curso, nota, fecha)
