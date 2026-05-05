import React from 'react'

const Ingredientes = ({item}) => {
  return (
    <section>
        
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