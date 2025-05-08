import React from 'react'
import { Link, useParams } from 'react-router-dom'
import AccPerfil from '../components/AccPerfil';
import AccReservas from '../components/AccReservas';
import AccLugares from '../components/AccLugares';


const Conta = () => {
  const { subpage } = useParams()

   const buttonClass = (button) => {
    let finalClass =
      "hover:bg-primary-400 cursor-pointer rounded-full px-4 py-2 transition hover:text-white";

    if (button === subpage) finalClass += " bg-primary-400 text-white";

    return finalClass;
  };

  return (
    <section className="p-8">
      <div className="mx-auto max-w-7xl flex flex-col gap-8 items-center">
        <div className="flex gap-2">
        <Link to="/conta/perfil" className={buttonClass("perfil")}>Perfil</Link>
        <Link to="/conta/reservas" className={buttonClass("reservas")}>Reservas</Link>
        <Link to="/conta/lugares" className={buttonClass("lugares")}>Lugares</Link>  
        </div>
        
        {subpage === "perfil" && <AccPerfil />}
        {subpage === "reservas" && <AccReservas/>}
        {subpage === "lugares" && <AccLugares />}
        
      </div>
    </section>
  )
}

export default Conta