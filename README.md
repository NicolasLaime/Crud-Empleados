# CRUD de Empleados con Spring Boot y React

Este proyecto es una aplicación web simple que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una lista de empleados. La aplicación está construida con Spring Boot en el backend y React en el frontend, utilizando MySQL como base de datos.

## Tecnologías Utilizadas

- **Backend**: Spring Boot, Spring Data JPA, MySQL
- **Frontend**: React, Axios (para las llamadas HTTP)
- **Base de Datos**: MySQL

## Estructura del Proyecto

El proyecto está dividido en dos partes principales:

1. **Backend**: Contiene la lógica del servidor, los controladores, servicios y repositorios.
2. **Frontend**: Contiene la interfaz de usuario construida con React.

### Backend

El backend está construido con Spring Boot y expone una API RESTful para realizar las operaciones CRUD sobre la entidad `Empleado`.

#### Endpoints

- **GET** `/api/empleados` - Obtiene la lista de todos los empleados.
- **GET** `/api/empleados/{id}` - Obtiene un empleado por su ID.
- **POST** `/api/crearempleado` - Crea un nuevo empleado.
- **PUT** `/api/actualizarempleado/{id}` - Actualiza un empleado existente.
- **DELETE** `/api/empleados/{id}` - Elimina un empleado por su ID.

#### Base de Datos

Se utiliza MySQL como base de datos. Asegúrate de tener MySQL instalado y configurado. Puedes configurar la conexión a la base de datos en el archivo `application.properties` del proyecto Spring Boot.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/TUBASEDEDATOS
spring.datasource.username=TU-USUARIO
spring.datasource.password=tu-contraseña
spring.jpa.hibernate.ddl-auto=update
