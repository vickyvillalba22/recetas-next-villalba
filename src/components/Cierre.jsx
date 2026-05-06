import React from 'react'
import Image from 'next/image'

const Cierre = ({items}) => {

  console.log(items);

  if (!items || items.length < 3) return <p>Cargando...</p>
  
  return (
    <section className='flex h-[90vh] justify-evenly items-center'>

      <div className='flex flex-col w-[40%] gap-4'>
          <h4>¡Gracias por ver!</h4>
          <p>Esperamos que estas recetas te resulten útiles y puedas cocinarselas a quien quieras! Porque no hay nada mejor que una rica comida.</p>
      </div>

      <div className="grid grid-cols-2 grid-rows-5 gap-4 h-[60vh] w-[35%]">
        <div className="relative row-span-2">
          <Image src={items[0].image} fill alt={items[0].name} className="object-cover rounded-2xl" loading='eager'/>
        </div>

        <div className="relative row-span-3 col-start-1 row-start-3">
          <Image src={items[1].image} fill alt={items[1].name} className="object-cover rounded-2xl" loading='eager' />
        </div>

        <div className="relative row-span-5 col-start-2 row-start-1">
          <Image src={items[2].image} fill alt={items[2].name} className="object-cover rounded-2xl" loading='eager' />
        </div>
      </div>


    </section>
  )
}

export default Cierre