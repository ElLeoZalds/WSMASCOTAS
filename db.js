require('dotenv').config();
const mysql = require('mysql2/promise');

//Se encarga de la conexión al servidor > DB
//1. Leer el archivo .env
//2. Crear un pool de conexión (reutilizable)
//3. Asignar todos los parametros de conexión

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForCOnnections:true,
  connectionLimit: 10,
  queueLimit: 0
})

//IMPORTANTE
//Exportar el objeto pool para que pueda ser utilizado en otros archivos
module.exports = pool;