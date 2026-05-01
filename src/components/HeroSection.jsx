//preguntas: como incorporo iconos
import Image from "next/image"

const HeroSection = ()=>{
    return(
        <section className="h-[80vh] border flex content-center flex-wrap">

            <div className="w-1/2 flex flex-col gap-8 h-fit">
                <h1 className="font-serif text-4xl">Comer sano es una parte muy importante de tu estilo de vida</h1>
                <p className="text-2xl">Recetas listas para preparar las comidas más ricas!</p>
                <button className="bg-red-400 p-2 rounded-2xl w-fit">Ver todas las recetas</button>
            </div>

            <div>
                
                <div className="absolute flex content-center justify-center star">
                    <p className="w-[80%] text-center">Súper fácil</p>
                </div>
                <div className="absolute rectangle">
                    <p className="w-[70%]">Se adaptan a tus preferencias!</p>
                </div>

            </div>

        </section>
    )
}

export default HeroSection