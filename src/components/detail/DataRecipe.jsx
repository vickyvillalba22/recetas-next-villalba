import React from 'react'
import { Icon } from '@iconify/react'

const DataRecipe = ({item}) => {

const {prepTimeMinutes, cookTimeMinutes, servings, difficulty} = item

const items = [
    {
        dato: prepTimeMinutes,
        medida: "mins",
        icono:"hugeicons:clock-01"
    }, 
    {
        dato: cookTimeMinutes, 
        medida: "mins",
        icono:"hugeicons:timer-02"
    },
    {
        dato: servings, 
        medida: "servings",
        icono:"hugeicons:user-group-02"
    },
    {
        dato: difficulty, 
        medida: "",
        icono:"hugeicons:pyramid-structure-01"
    }
]


  return (
    <section className='row-span-2 border-2 border-(--color-acento2) rounded-2xl flex justify-center'>

        <ul className='list-none flex flex-wrap'>

            {items.map((item, index)=>(
                <li key={index} className='w-1/2 flex items-center justify-center gap-4 py-5 px-3'>
                    <Icon icon={item.icono} className='text-(--color-oscuro) text-[40px]' />
                    <span className='text-[18px]'>{item.dato} {item.medida}</span>
                </li>
            ))}

        </ul>

    </section>

  )
}

export default DataRecipe