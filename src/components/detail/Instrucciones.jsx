import React from 'react'

const Instrucciones = ({item}) => {

    return (
        <section>
            
            <h4>Instructions</h4>

            <ul className='list-none flex flex-col gap-4'>
                {item.instructions.map((inst, index)=>{
                    <li key={index}><strong>${index}) </strong>{inst}</li>
                })}
            </ul>
            
        </section>
    )
}

export default Instrucciones