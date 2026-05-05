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
    <section>
        <h2>Categorías</h2>
        <button>Mostrar todas las recetas</button>
        <div className='flex'>
            {arrayCategories.map((recipe, index)=>(
                <div key={index}>
                    <Image src={recipe.image} width={100} height={100} alt={recipe.name} />
                    <h3>{recipe.name}</h3>
                </div>
            ))}
        </div>
    </section>
  )
}

export default categories