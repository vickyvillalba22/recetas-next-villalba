import React from 'react'
import { Icon } from '@iconify/react'

const Instrucciones = ({item}) => {

    return (
        <section className='row-span-5 col-start-3 row-start-1 border-2 border-(--color-acento) rounded-2xl flex flex-col gap-4 relative overflow-hidden p-8'>
            
            <h4 className='text-2xl font-bold'>Instructions</h4>

            <ul className='list-none flex flex-col gap-4'>
                {item.instructions.map((inst, index)=>(
                    <li key={index}><strong>{index}) </strong>{inst}</li>
                ))}
            </ul>

            <Icon 
                icon="hugeicons:cook-book"
                width="150"
                height="150"
                className="absolute top-[75%] right-[-20] opacity-40 text-(--color-acento) rotate-20"
            />
            
        </section>
    )
}

export default Instrucciones