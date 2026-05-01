// faltan íconos

const Footer = ()=>{
    return(

        <footer className="w-full flex items-center justify-center mt-12 bg-(--color-oscuro) text-(--blanco) self-end h-[20vh]">

            <div className="w-[90%] flex justify-between">

                <div className="flex flex-col w-[40%] gap-4 h-fit">
                    <p>Desarrollado por Victoria Villalba</p>
                    <p>Buenos Aires, Argentina</p>
                </div>

                <div className="flex flex-col w-[40%] gap-4 h-fit">
                    <div id="contIcons" className="w-fit flex gap-8 self-end">Iconos</div>
                    <a className="w-fit self-end" href="">villalbavictoria120@gmail.com</a>
                </div>

            </div>

        </footer>
    )
}

export default Footer