import React from 'react'
import Image from 'next/image'

const Cierre = ({items}) => {

  console.log(items);
  

  return (
    <section className='flex h-[90vh] justify-between items-center'>

      <div className='flex flex-col w-[40%] gap-4'>
          <h4>¡Gracias por ver!</h4>
          <p>Esperamos que estas recetas te resulten útiles y puedas cocinarselas a quien quieras! Porque no hay nada mejor que una rica comida.</p>
      </div>

      <div className="grid grid-cols-2 grid-rows-5 gap-4">
        <Image src={items[0].image} width={100} height={100} alt={items[0].name} className="row-span-2" />
        <Image src={items[1].image} width={100} height={100} alt={items[1].name} className="row-span-3 col-start-1 row-start-3" />
        <Image src={items[2].image} width={100} height={100} alt={items[2].name} className="row-span-5 col-start-2 row-start-1" />
      </div>


    </section>
  )
}

export default Cierre