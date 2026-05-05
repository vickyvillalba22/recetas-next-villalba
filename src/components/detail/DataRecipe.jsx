import React from 'react'
import { Icon } from '@iconify/react'

const DataRecipe = ({item}) => {

const {prepTimeMinutes, cookTimeMinutes, servings, difficulty} = item

const items = [
    {
        dato: prepTimeMinutes, 
        icono:"hugeicons:clock-01"
    }, 
    {
        dato: cookTimeMinutes, 
        icono:"hugeicons:timer-02"
    },
    {
        dato: servings, 
        icono:"hugeicons:user-group-02"
    },
    {
        dato: difficulty, 
        icono:"hugeicons:pyramid-structure-01"
    }
]


  return (
    <section className='row-span-2 border-2 border-(--color-oscuro) rounded-2xl'>

        <ul className='list-none'>

            {items.map((item, index)=>(
                <li key={index}>
                    <span><Icon icon={item.icono} /></span>
                    {item.dato}
                </li>
            ))}

        </ul>

    </section>

  )
}

export default DataRecipe