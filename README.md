# API de Mascotas

Esta es una API para guardar, ver, cambiar y borrar mascotas.

## Requisitos

- Node.js
- MySQL

## Cómo usar

1. Clona el proyecto:

```bash
git clone https://github.com/ElLeoZalds/WSMASCOTAS
Instala los paquetes:

bash
Copiar código
npm install
Crea un archivo .env con esto:

init
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_DATABASE=veterinaria
DB_PORT=3306
PORT=3000

Crea la base de datos y tabla en MySQL:

sql
Copiar código
CREATE DATABASE veterinaria;
USE mascotas;

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
