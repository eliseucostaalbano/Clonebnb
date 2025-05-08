import { useState } from "react";

const NovoLugar = () => {
  const [titulo, setTitulo] = useState("");
  const [cidade, setCidade] = useState("");
  return (
    <div className="flex w-full flex-col gap-6 px-8">
      <div className="flex flex-col gap-1">
        <h2 className="ml-2 text-2xl font-bold">Título</h2>
        <input
          type="text"
          placeholder="Digite o título do seu anúncio"
          className="rounded-full border border-gray-300 px-4 py-2"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="ml-2 text-2xl font-bold">Cidade e país</h2>
        <input
          type="text"
          placeholder="Digite a cidade e país do seu anúncio"
          className="rounded-full border border-gray-300 px-4 py-2"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="ml-2 text-2xl font-bold">Fotos</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Adione uma foto pelo link dela"
            className="rounded-full border border-gray-300 px-4 py-2 grow"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
          <button className="transition cursor-pointer rounded-full border border-gray-300 bg-gray-100 px-4 py-2 hover:bg-gray-200">
            Enviar foto
          </button>
        </div>
      </div>
    </div>
  );
};

export default NovoLugar;
