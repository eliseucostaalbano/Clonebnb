import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";


const Registro= () => {
  const {setUser} = useUserContext();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [redirect, setRedirect] = useState(false);

  const lidarSubmit = async (e) => {
    e.preventDefault();
    if (email && senha && nome) {
      try {
        const {data: User} = await axios.post("/users", {
      nome,
      email,
      senha,
    })
    setUser(User);
    setRedirect(true);
      } catch (error) {
        alert(`Deu um erro ao cadastrar o usuario: ${JSON.stringify(error)}`);
      }
      
    }else {
      alert("Preencha todos os campos!");
    }

};

  if (redirect) return <Navigate to="/" />;
  
  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Faça seu Cadastro</h1>

        <form className="flex w-full flex-col gap-2" onSubmit={lidarSubmit}>
            <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full rounded-full border border-gray-300 px-4 py-2"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Digite sua senha"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button className="bg-primary-400 w-full cursor-pointer rounded-full border border-gray-300 px-4 py-2 font-bold text-white">
            Registrar
          </button>
        </form>

        <p>
          Já tem uma conta?
          <Link to="/login" className="font-semibold underline">
            Logue aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Registro;
