import React from 'react'

const Ingredientes = ({item}) => {
  return (
    <section className='row-span-3 col-start-2 row-start-3 border-2 border-(--color-medio) rounded-2xl'>
        
        <h4>Ingredients</h4>

        <ul className='list-none flex flex-col gap-4'>
            {item.ingredients.map((ing, index)=>(
                <li key={index}>{ing}</li>
            ))}
        </ul>

    </section>
  )
}

export default Ingredientes