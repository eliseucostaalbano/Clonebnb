import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">
      <div className="mx-auto w-full max-w-96 flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Faça seu login</h1>

        <form className="flex w-full flex-col gap-2">
          <input 
          type="email"
          placeholder="Digite seu e-mail"
          className="w-full rounded-full border border-gray-300 px-4 py-2"/>

          <input 
          type="password" 
          placeholder="Digite sua senha"
          className="w-full rounded-full border border-gray-300 px-4 py-2" />

          <button className="w-full bg-primary-400 cursor-pointer rounded-full border border-gray-300 px-4 py-2 font-bold text-white">Login</button>
        </form>

        <p>
          Ainda não tem uma conta?
          <Link to="/registrar" className="font-semibold underline">Registre-se aqui!</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
