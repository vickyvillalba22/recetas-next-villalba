const Footer = ()=>{
    return(
        <footer className="w-full flex justify-evenly content-center mt-12">

            <div className="flex flex-col w-[40%] gap-4">
                <p>Desarrollado por Victoria Villalba</p>
                <p>Buenos Aires, Argentina</p>
            </div>

            <div className="flex flex-col w-[40%] gap-8">
                <div id="contIcons" className="w-fit flex gap-16"></div>
                <a className="w-fit" href="">villalbavictoria120@gmail.com</a>
            </div>

        </footer>
    )
}

export default Footer