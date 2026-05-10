import React from 'react'
import { Icon } from '@iconify/react'

const Ingredientes = ({item}) => {
  return (

    <section className='row-span-3 col-start-2 row-start-3 border-2 border-(--color-medio) rounded-2xl p-8 flex flex-col gap-4 relative overflow-hidden'>
        
        <h4 className='text-2xl font-bold'>Ingredients</h4>

        <ul className='list-disc gap-4 pl-4 grid grid-cols-2'>
            {item.ingredients.map((ing, index)=>(
                <li key={index}>{ing}</li>
            ))}
        </ul>

        <Icon 
          icon="hugeicons:cookie"
          width="150"
          height="150"
          className="absolute top-[65%] right-[5%] opacity-50 text-(--color-medio)"
        />

    </section>
  )
}

export default Ingredientes