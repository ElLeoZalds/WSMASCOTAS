require('dotenv').config();

const express = require('express');
const pool = require('./db');

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

const handDbError = (res, error) => {
  console.error('Error en la base de datos: ', error)
  res.status(500).json({error: 'Error interno en el servicio' });
};

//GET
app.get('/mascotas/:id', async(req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM mascotas WHERE id = ?', [id]);
    if(rows.length === 0) {
      return res.status(404).json({ error: 'Mascota no encontrada' });
    }
    res.status(200).json(rows[0]);
  } catch(error) {
    handDbError(res, error);
  }
});

//GET todas
app.get('/mascotas', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM mascotas ORDER BY id DESC');
    res.status(200).json(rows);
  }catch(error) {
    handDbError(res, error);
  }
});

//POST
app.post('/mascotas', async (req, res) => {
    const {nombre, tipo, raza, color, peso, genero} = req.body;
    if (!nombre || !tipo || !raza || !color || !peso || !genero) {
      return res.status(400).json({error: "Todos los campos son obligatorios"});
    }
    try {
      const [result] = await pool.query("INSERT INTO mascotas (nombre, tipo, raza, color, peso, genero) VALUES (?, ?, ?, ?, ?, ?)", [nombre, tipo, raza, color, peso, genero]);
      const nuevoRegistro = { id: result.insertId };
      res.status(201).json(nuevoRegistro);
    }catch(error) {
      handDbError(res, error);
    }
});

//PUT
app.put('/mascotas/:id', async (req, res) => {
  const {id} = req.params;
  const {nombre, tipo, raza, color, peso, genero} = req.body;

  if(!id || !nombre || !tipo || !raza || !color || !peso || !genero) {
    return res.status(400).json({error: "Todos los campos son obligatorios"});
  }

  try{
    const [result] = await pool.query("UPDATE mascotas SET nombre = ?, tipo = ?, raza = ?, color = ?, peso = ?, genero = ? WHERE id = ?", [nombre, tipo, raza, color, peso, genero, id]);
    if(result.affectedRows === 0) {
      return res.status(404).json({error: "mascota no encontrada"});
    }
      return res.status(200).json({message: "mascota actualizado correctamente"});
  }catch(error) {
    handDbError(res, error);
  }
});

//DELETE
app.delete('/mascotas/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const [result] = await pool.query("DELETE FROM mascotas WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({error: "Mascota no encontrada"});
    }
    return res.status(200).json({message: "Mascota eliminado correctamente"});
  } catch(error) {
    handDbError(res, error);
  }
});

//Ejecutar
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
