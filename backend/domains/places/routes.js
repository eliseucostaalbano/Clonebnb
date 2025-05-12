import { Router } from "express";
import Lugar from "./model.js";

const router = Router();

router.post("/", async (req, res) => {
  const {
    titulo,
    cidade,
    foto,
    descrição,
    extras,
    preço,
    checkin,
    checkout,
    convidados,
  } = req.body;

  try {
    const NewlugarDoc = await Lugar.create({
      dono,
      titulo,
      cidade,
      foto,
      descrição,
      extras,
      preço,
      checkin,
      checkout,
      convidados,
    });

    res.status(201).json(lugar);
    
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }

});

export default router;
