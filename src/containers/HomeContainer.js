// 1. declaramos que será use client. aunque no haya eventos, el use client es porque vamos a usar useState.
'use client'

// 3. importamos axios
import axios from 'axios';

import { useState, useEffect } from 'react';

import HeroSection from "@/components/HeroSection";
import CardsGrid from "@/components/CardsGrid";

const HomeContainer = () => {

  // 2. declaramos el estado del array
  const [items, setItems] = useState([])

  // 4. armamos la funcion asincrónica para traer la informacion. el tema es buscar bien la clave que vamos a usar de ese json. en este caso es recipes.
  const handleGetItems = async()=>{

    try {

        const response = await axios.get('https://dummyjson.com/recipes?limit=20&skip=0')
        const data = response.data.recipes
        
        // 5. la guardamos en memoria
        setItems(data)

    } catch (error) {
        console.log("hubo un error en el fetch", error)
    }
    
  }

  // 6. useEffect. (funcion, array de dependencias).
  // array de dependencias: es lo que le dice al useEffect cuando tiene que ejecutarse. es obligatorio. si esta vacío se va a ejecutar una sola vez. si va algo dentro, puede ser una variable del state y se ejecutara las veces que cambie esas variables del state, se vuelve a correr

  useEffect(()=>{
    // eslint-disable-next-line
    handleGetItems()
  }, [])

  const [loading, setLoading] = useState(true)

  return (

    <div className="w-[90%] flex flex-col content-center">
      <HeroSection />

      <section>
        {loading && <div>Loading...</div>}          
        {!loading && <CardsGrid items={items} />}
      </section>

    </div>

  )
}

export default HomeContainer