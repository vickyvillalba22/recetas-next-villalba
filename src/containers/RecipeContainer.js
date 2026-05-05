'use client'

import { useState, useEffect } from "react"
import axios from "axios"

const RecipeContainer = ({id}) => {

    const [item, setItem] = useState({})
    
    //agregar siempre un loading también o incluso un manejo de 'not found'

    const handleGetRecipe = async () => {

        try {
            const response = await axios.get(`https://dummyjson.com/recipe/${id}`)
            const data = response.data
            setItem(data)
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(()=>{
        // eslint-disable-next-line
        handleGetRecipe()
    })

  return (

    <main>

        <section>

            <div>
                <Image src={item.image} className="w-full object-cover" />
                <div className="df spaceb">
                    <p>{item.cuisine}</p>
                    <ul className="" class="df wrap w80">${contLabels.join("")}</ul>
                </div>
            </div>

        <div class="df columna gap-16">
            <h2>${obj.name}</h2>
            <ul>${contTypes.join("")}</ul>
        </div>

        <div class="df spacee">
            <div class="df gap-16">
                <iconify-icon icon="hugeicons:star"></iconify-icon>
                <p>Rating: ${obj.rating}</p>
            </div>
            <div class="df gap-16">
                <iconify-icon icon="hugeicons:message-01"></iconify-icon>
                <p>Reviews: ${obj.reviewCount}</p>
            </div>
        </div>

        </section>

        <section id="tecnico"></section>

        <section id="ingredientes" class="df columna gap-16"></section>

        <section id="pasos" class="df columna gap-16"></section>
        <h1>{item.name}</h1>

    </main>
  )
}

export default RecipeContainer