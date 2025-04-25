import { Router } from "express";
import { connectDb } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";

const router = Router();
const bcryptSalt = bcrypt.genSaltSync();

router.get("/", async (req, res) => {
  connectDb();

  try {
    const userDoc = await User.find();

    res.json(userDoc);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  connectDb();

  const { nome, email, senha } = req.body;
  const senhaIncripitada = bcrypt.hashSync(senha, bcryptSalt);

  try {
    const newUserDoc = await User.create({
      nome,
      email,
      senha: senhaIncripitada,
    });
    res.json(newUserDoc);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
