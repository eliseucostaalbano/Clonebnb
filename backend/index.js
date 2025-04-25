import express from 'express';
import "dotenv/config";
import { connectDb } from './config/db.js';
import User from './models/User.js';

const app = express();
const { PORT } = process.env;

app.use(express.json()); 

app.get("/users", async (req, res) => {
  connectDb();
  
  try {
    const userDoc = await User.find();

    res.json(userDoc);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post("/users", async (req, res) => {
  connectDb();

  const {nome, email, senha } = req.body;
  try {
    const newUserDoc = await User.create({
      nome,
      email,
      senha,
    });
    res.json(newUserDoc);

  }catch (error) {
    res.status(500).json(error);
  }
})

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
})