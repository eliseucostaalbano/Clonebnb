import { Router } from "express";
import Lugar from "./model.js";
import { JWTVerify } from "../../utils/jwt.js";
import { connectDb } from "../../config/db.js";
// se não der certo no postman, tenta o reqbin

const router = Router();

router.post("/", async (req, res) => {
  connectDb();

  const {
    titulo,
    cidade,
    fotos,
    descrição,
    extras,
    perks,
    preço,
    checkin,
    checkout,
    convidados,
  } = req.body;

  try {
    const { _id: dono }= await JWTVerify(req);

    const NewlugarDoc = await Lugar.create({
      dono,
      titulo,
      cidade,
      fotos,
      descrição,
      extras,
      perks,
      preço,
      checkin,
      checkout,
      convidados,
    });

    res.json(NewlugarDoc);

  } catch (error) {
    console.error(error);
    res.status(500).json("deu erro ao criar o lugar");
  }
});

export default router;
