import React from 'react'

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
    <div>
        
        DataRecipe

        <ul className='list-none'>

            {items.map((item, index)=>(
                <li key={index}>
                    <span>{item.icono}</span>
                    {item.dato}
                </li>
            ))}

        </ul>

    </div>

  )
}

export default DataRecipe