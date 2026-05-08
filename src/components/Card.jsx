'use client'

import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"

const Card = ({id, name, cuisine, image, tags}) => {
    
    return (
        
        <div>

            <div className="gap-3 flex flex-col bg-(--blanco) rounded-2xl p-5 drop-shadow-sm">

            <Image
            
                src={image}
                width={100}
                height={200}
                alt={name}
                className="rounded-2xl w-full"

            />

            <p>{cuisine}</p>

            <h3 className="text-lg font-semibold">{name}</h3>

            <ul className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-(--color-medio) text-(--blanco) text-xs py-0.5 px-2 rounded-2xl">{tag}</span>
                ))}
            </ul>

            <button className="text-sm font-medium py-1 px-5 flex items-center gap-4 w-fit bg-(--color-acento2) text-(--color-oscuro) rounded-2xl self-end">
                <Link href={`/recipe/${id}`} className="flex gap-2">
                    Detalles
                    <Icon icon="hugeicons:arrow-right-02" className="text-[20px]" />
                </Link>
            </button>

            </div>

        </div>
        
    )

}

export default Card