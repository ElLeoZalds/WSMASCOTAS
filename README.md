# API de Mascotas

Esta es una API para guardar, ver, cambiar y borrar mascotas.

## Requisitos

- Node.js
- MySQL

## Cómo usar

1. Clona el proyecto:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
Instala los paquetes:

bash
Copiar código
npm install
Crea un archivo .env con esto:

ini
Copiar código
PORT=3000
HOST=localhost
USER=tu_usuario_mysql
PASSWORD=tu_contraseña_mysql
DB=nombre_de_tu_base
Crea la base de datos y tabla en MySQL:

sql
Copiar código
CREATE DATABASE nombre_de_tu_base;
USE nombre_de_tu_base;

CREATE TABLE mascotas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  tipo VARCHAR(50),
  raza VARCHAR(100),
  color VARCHAR(50),
  peso DECIMAL(5,2),
  genero ENUM('M', 'F')
);
Ejecuta el servidor:

bash
Copiar código
npm start
Rutas
GET /mascotas — Ver todas las mascotas

GET /mascotas/:id — Ver una mascota

POST /mascotas — Agregar mascota

PUT /mascotas/:id — Cambiar mascota

DELETE /mascotas/:id — Borrar mascota
