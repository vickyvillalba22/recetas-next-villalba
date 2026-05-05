import React from 'react'
import Image from "next/image"
import { Icon } from '@iconify/react'

const InfoRecipe = ({item}) => {
  return (
    <section className='bg-(--blanco) p-6 row-span-5 rounded-2xl'>

                <h1>{item.name}</h1>

                <div className="flex flex-col gap-2">

                    <Image
                    
                        src={item.image}
                        width={100}
                        height={200}
                        alt={item.name}
                        className="rounded-2xl w-full"
                        loading='eager'

                    />

                    <div className="flex justify-between">

                        <p>{item.cuisine}</p>

                        <ul className="flex flex-wrap w-[80%]">

                            { item.tags.map((tag, index)=>(
                                    <li key={index}>{tag}</li>
                            ))}
                        </ul>
                        
                    </div>

                </div>

                <div className='flex flex-col gap-4'>
                    <h2>{item.name}</h2>
                    <ul>{item.mealType.map((type, index)=>(<span key={index}>{type}</span>))}</ul>
                </div>

                <div className='flex justify-between'>
                    <div className='flex gap-4'>
                        <span><Icon icon="hugeicons:star" /></span>
                        <p>Rating: {item.rating}</p>
                    </div>
                    <div className='flex gap-4'>
                        <span><Icon icon="hugeicons:message-01" /></span>
                        <p>Reviews: {item.reviewCount}</p>
                    </div>
                </div>

            </section>
  )
}

export default InfoRecipe