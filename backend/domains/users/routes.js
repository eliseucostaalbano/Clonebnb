import { Router } from "express";
import { connectDb } from "../../config/db.js";
import "dotenv/config";
import User from "./model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWTVerify, JWTSign } from "../../utils/jwt.js";

const router = Router();
const bcryptSalt = bcrypt.genSaltSync();
const { JWT_SECRET_KEY } = process.env;

router.get("/", async (req, res) => {
  connectDb();

  try {
    const userDoc = await User.find();

    res.json(userDoc);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/profile", async (req, res) => {
  const userInfo = await JWTVerify(req);

  res.json(userInfo);
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
    const { _id } = newUserDoc;
    const novoUserObj = { nome, email, _id };
    try {
      const token = await JWTSign(novoUserObj);
      res.cookie("token", token).json(novoUserObj);
    } catch (error) {
      res.status(500).json("Erro ao assinar com o JWT", error);
    }
  } catch (error) {
    res.status(500).json(error);
    throw error;
  }
});

router.post("/login", async (req, res) => {
  connectDb();

  const { email, senha } = req.body;
  try {
    const userDoc = await User.findOne({ email });
    if (userDoc) {
      const senhaCorreta = bcrypt.compareSync(senha, userDoc.senha);
      const { nome, _id } = userDoc;

      if (senhaCorreta) {
        const novoUser = { nome, email, _id };
        try {
          const token = await JWTSign(novoUser);
          res.cookie("token", token).json(novoUser);
        } catch (error) {
          res.status(500).json("Erro ao assinar com o JWT", error);
        }
      } else {
        res.status(400).json("Senha incorreta");
      }
    } else {
      res.status(400).json("Usuário não encontrado");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token").json("Deslogado com sucesso!");
});

export default router;
