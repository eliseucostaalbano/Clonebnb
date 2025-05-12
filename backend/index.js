import express from 'express';
import "dotenv/config";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import UserRoutes from "./domains/users/routes.js";
import PlaceRoutes from "./domains/places/routes.js";
// fazer um  npm run dev tanto no frontend quanto no backend

const app = express();
const { PORT } = process.env;

app.use(express.json()); 
app.use(cookieParser());
app.use(cors({
   origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/users", UserRoutes);
app.use("/lugares", PlaceRoutes);


app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
})
