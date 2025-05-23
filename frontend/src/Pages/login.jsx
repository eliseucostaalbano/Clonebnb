import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";


const Login = () => {
  const { user, setUser } = useUserContext();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [redirect, setRedirect] = useState(false);

  const lidarSubmit = async (e) => {
    e.preventDefault();
    if (email && senha) {
      try {
        const {data: User} = await axios.post("/users/login", {
      email,
      senha,
    })
    setUser(User);
    setRedirect(true);
      } catch (error) {
        alert(`Deu um erro ao logar: ${error.response.data}`);
      }
      
    }else {
      alert("Preencha todos os campos!");
    }

  };
  if (redirect || user) return <Navigate to="/" />;
  

  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Faça seu login</h1>

        <form className="flex w-full flex-col gap-2" onSubmit={lidarSubmit}>
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
            Login
          </button>
        </form>

        <p>
          Ainda não tem uma conta?
          <Link to="/registro" className="font-semibold underline">
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
