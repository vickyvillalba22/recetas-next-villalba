'use client'

import React from 'react'
import Image from 'next/image';

const Categories = ({items, setFilter}) => {

    console.log(items);

    const categoriasListas = [...new Set(items.map(item => item.cuisine))].map((cuisine, index) => ({
        name: cuisine,
        image: items.find(item => item.cuisine === cuisine).image,
        color: "",
    }))

  return (

    <section className='flex flex-col gap-6'>

        <div className='flex justify-between'>
            <h2 className='text-3xl font-bold'>Categorías</h2>
            <button className='bg-(--color-acento) py-2 px-5 rounded-2xl w-fit text-(--blanco) flex items-center gap-2'>Mostrar todas las recetas</button>
        </div>

        <div className='flex gap-8'>

            {categoriasListas.map((cuisine, index)=>(

                <button key={index} className='flex flex-col items-center' onClick={()=> setFilter(cuisine.name)} >
                    <Image src={cuisine.image} width={100} height={100} alt={cuisine.name} className='rounded-full' />
                    <h3 className='border py-10 px-6 rounded-2xl'>{cuisine.name}</h3>
                </button>

            ))}

        </div>

    </section>

  )
}

export default Categories