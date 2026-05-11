import React from 'react'
import Image from "next/image"
import { Icon } from '@iconify/react'

const InfoRecipe = ({item}) => {

  return (

    <section className='h-[85vh] bg-(--blanco) p-6 mt-4 rounded-2xl flex flex-col justify-between lg:row-span-5 lg:mt-0'>

        <div className="flex flex-col gap-4">

                <Image
                
                    src={item.image}
                    width={100}
                    height={200}
                    alt={item.name}
                    className="rounded-2xl w-full h-[45vh] object-cover"
                    loading='eager'

                />

                <div className="flex justify-between">

                    <p className='text-(--color-oscuro)'>{item.cuisine}</p>

                    <ul className="flex flex-wrap w-[70%] gap-3 justify-end">

                        { item.tags.map((tag, index)=>(
                                <li key={index} className='bg-(--color-acento2) py-0.5 px-2 rounded-2xl text-[12px] flex items-center text-(--color-oscuro)'>{tag}</li>
                        ))}

                    </ul>
                    
                </div>

            </div>

            <div className='flex flex-col gap-1'>
                <h1 className='font-serif text-3xl font-bold'>{item.name}</h1>
                <ul className='flex gap-2'>Type: {item.mealType.map((type, index)=>(<span key={index}>- {type}</span>))}</ul>
            </div>

            <div className='flex justify-evenly'>
                <div className='flex gap-4 items-center'>
                    <span><Icon icon="hugeicons:star" className='text-[20px]' /></span>
                    <p>Rating: {item.rating}</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <span><Icon icon="hugeicons:message-01" className='text-[20px]' /></span>
                    <p>Reviews: {item.reviewCount}</p>
                </div>
            </div>

        </section>
  )
}

export default InfoRecipe