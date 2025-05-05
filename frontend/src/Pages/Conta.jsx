import React from 'react'
import { useParams } from 'react-router-dom'

// login:eliseucosta@gmail.com senha:teste

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
      <div className="mx-auto max-w-7xl flex flex-col gap-4 items-center">
        <div className="flex gap-2">
        <button className={buttonClass("perfil")}>Perfil</button>
        <button className={buttonClass("reservas")}>Reservas</button>
        <button className={buttonClass("lugares")}>Lugares</button>  
        </div>
        
        <div className="flex flex-col gap-2 items-center">
          <p>Logado como Eliseu Costa (eliseucosta@gmail.com)</p>

          <button className='rounded-full bg-primary-400 text-white min-w-44 px-4 py-2 transition cursor-pointer'>Logout</button>
        </div>
      </div>
    </section>
  )
}

export default Conta