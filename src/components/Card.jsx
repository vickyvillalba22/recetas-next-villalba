'use client'

import { useState } from "react"

// la gracia del componente de image es que las va cargando a medida que aparecen en el viewport. le podemos poner un placeholder también.
import Image from "next/image"

//ruta para ir a las comidas
import Link from "next/link"

const Card = ({name, image, id}) => {

    const [likes, setLikes] = useState(0)
    const [cardColor, setCardColor] = useState('light')
    const [showName, setShowName] = useState(true)

    const handleLikes = ()=>{
        setLikes(likes+1)
    }
    const handleColor = ()=>{
        setCardColor(cardColor === 'light' ? 'dark' : 'light') 
    }

    const handleShowName = ()=>{
        setShowName(!showName)
    }

    return (
        
        <div className={`border ${cardColor === 'dark' ? 'bg-black' : 'bg-white'} gap-1 flex`}>

            {showName && ( <h3>{name}</h3> )}

            <button onClick={handleLikes}> Like {likes} </button>

            <button onClick={handleColor}>Toggle color</button>

            <button onClick={handleShowName}>Toggle name</button>

            <Image
            
                src={image}
                width={100}
                height={200}
                alt={name}

            />

            <button>
                <Link href={`/src/app/recipe/${id}`}>Ver receta</Link>
            </button>

        </div>
        
    )

}

export default Card