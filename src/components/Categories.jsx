import React from 'react'
import Image from 'next/image';

const categories = ({items}) => {

    console.log(items);

    const arrayCategories = []

    items.map((recipe, index)=>{
        const yaEsta = arrayCategories.some(cat=>cat.name===recipe.cuisine)
        if(!yaEsta){
            arrayCategories.push({
              name: recipe.cuisine,
              image: recipe.image,
              color: ""
            })
        }
    })

    console.log(arrayCategories);

  return (

    <section className='flex flex-col gap-6'>

        <div className='flex justify-between'>
            <h2 className='text-3xl font-bold'>Categorías</h2>
            <button className='bg-(--color-acento) py-2 px-5 rounded-2xl w-fit text-(--blanco) flex items-center gap-2'>Mostrar todas las recetas</button>
        </div>

        <div className='flex gap-8'>
            {arrayCategories.map((recipe, index)=>(

                <div key={index} className='flex flex-col items-center'>
                    <Image src={recipe.image} width={100} height={100} alt={recipe.name} className='rounded-full' />
                    <h3 className='border py-10 px-6 rounded-2xl'>{recipe.name}</h3>
                </div>

            ))}
        </div>

    </section>

  )
}

export default categories