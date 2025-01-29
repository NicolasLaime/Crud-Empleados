# Usar una imagen base de OpenJDK
FROM openjdk:17-jdk-slim

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo JAR a la imagen Docker
COPY target/empleados-0.0.1-SNAPSHOT.jar /app/empleados.jar

# Exponer el puerto en el que la aplicación Spring Boot escucha
EXPOSE 8080

# Ejecutar el archivo JAR al iniciar el contenedor
ENTRYPOINT ["java", "-jar", "empleados.jar"]