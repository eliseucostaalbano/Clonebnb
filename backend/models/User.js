import {Schema, model} from "mongoose";

const userSchema = new Schema({
  nome: String,
  email: { type: String, unique: true },
  senha: String,
});

export default model("User", userSchema);