'use client'

import { useState, useEffect } from "react"
import axios from "axios"
import InfoRecipe from "@/components/detail/InfoRecipe"
import DataRecipe from "@/components/detail/DataRecipe"
import Ingredientes from "@/components/detail/Ingredientes"
import Instrucciones from "@/components/detail/Instrucciones"

const RecipeContainer = ({id}) => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const handleGetRecipe = async () => {

        try {
            const response = await axios.get(`https://dummyjson.com/recipe/${id}`)
            const data = response.data
            setItem(data)
            
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }

    }

    useEffect(()=>{
        // eslint-disable-next-line
        handleGetRecipe()
        
    })

    if (loading) return <p>Cargando...</p>
    if (!item) return <p>Receta no encontrada</p>

    return (

        <main className="grid grid-cols-3 grid-rows-5 gap-4 w-[90%] h-[85vh]">
            <InfoRecipe item={item} />
            <DataRecipe item={item} />
            <Ingredientes item={item} />
            <Instrucciones item={item} />
        </main>
    )
}

export default RecipeContainer