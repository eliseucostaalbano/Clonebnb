import express from 'express';
import "dotenv/config";
import cors from 'cors';
import UserRoutes from "./domains/users/routes.js";

const app = express();
const { PORT } = process.env;

app.use(express.json()); 
app.use(cors());

app.use("/users", UserRoutes);

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
})
