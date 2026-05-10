'use client'

import React from 'react'
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Categories = ({items, setFilter}) => {

    const [categoriasListas, setCategoriasListas] = useState([])

    const colores = [
        "bg-red-300",
        "bg-yellow-300",
        "bg-green-300",
        "bg-purple-300",
        "bg-blue-300",
        "bg-pink-300",
        "bg-orange-300",
        "bg-teal-300",
        "bg-purple-300",
        "bg-blue-300",
    ]

    useEffect(()=>{

        const categorias = [...new Set(items.map(item => item.cuisine))].map((cuisine, index) => ({
            name: cuisine,
            image: items.find(item => item.cuisine === cuisine).image,
            color: colores[index],
        }))

        setCategoriasListas(categorias)

    }, [items])


  return (

    <section id='categories' className='flex flex-col gap-6'>

        <div className='flex justify-between'>
            <h2 className='text-3xl font-bold'>Categorías</h2>
            <button onClick={()=>setFilter("all")} className='bg-(--color-acento) py-2 px-5 rounded-2xl w-fit text-(--blanco) flex items-center gap-2'>Mostrar todas las recetas</button>
        </div>

        <div className='flex gap-8 items-center h-[40vh] w-full overflow-x-auto [&::-webkit-scrollbar]:hidden'>

            {categoriasListas.map((cuisine, index)=>(

                <button 
                    key={index} 
                    className='flex flex-col items-center'
                    onClick={()=> setFilter(cuisine.name)} 
                    >
                
                    <Image src={cuisine.image} width={100} height={100} alt={cuisine.name} className='rounded-full translate-y-1/4 h-25 w-[full] object-cover' />

                    <h3 className= {`${cuisine.color} py-10 px-8 rounded-2xl`} >{cuisine.name}</h3>

                </button>

            ))}

        </div>

    </section>

  )
}

export default Categories