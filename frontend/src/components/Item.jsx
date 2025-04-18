import React from 'react'

const Item = () => {
  return (
    <div className='flex flex-col gap-2'>  
      {/* <img
        src=""
        alt="Imagem da acomodação"
        className="aspect-square rounded-2xl object-cover"
      /> */}

      <div>
        <h3 className="text-xl font-semibold">Cabo frio, Rio de Janeiro</h3>
        <p className="truncate text-gray-600"></p>
      </div>

      <p>
        <span className="font-semibold"> R$ 500</span> por noite
      </p></div>
  )
}

export default Item