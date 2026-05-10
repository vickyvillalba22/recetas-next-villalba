import Image from "next/image"
import { Icon } from "@iconify/react"
import Link from "next/link"

const HeroSection = ()=>{
    return(

        <section className="h-[90vh] flex items-center justify-evenly flex-wrap">

            <div className="w-[40%] flex flex-col gap-8 h-fit">

                <h1 className="font-serif text-[2.5em]/14">Comer sano es una parte muy importante de tu estilo de vida</h1>

                <p className="text-2xl">Recetas listas para preparar las comidas más ricas!</p>

                <Link href="/#recipes" className="bg-(--color-acento) py-2 px-5 rounded-2xl w-fit text-(--blanco) flex items-center gap-2">
                    Ver todas las recetas
                    <Icon icon="hugeicons:arrow-down-02" className="text-[1.4em]" />
                </Link>

            </div>

            <div className="relative w-[45%] flex justify-center">

                <Image 
                
                    src='/imgs/hero-image.png'
                    width={500}
                    height={100}
                    alt="recetas ricas y fáciles"
                    className="z-1"
                    
                />
                
                <div className="absolute flex content-center justify-center top-10 right-20 clip-star bg-(--color-acento2) aspect-square p-4 z-2">
                    <p className="text-center flex w-[50%] h-fit mt-2 font-bold">Súper fácil</p>
                </div>
                <div className="absolute bottom-10 left-0 border-2 border-(--color-medio) rounded-2xl p-2 z-0">
                    <p className="w-[70%] pl-3">Se adaptan a tus preferencias!</p>
                </div>

            </div>

        </section>
    )
}

export default HeroSection