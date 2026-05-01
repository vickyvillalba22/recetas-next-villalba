import Image from "next/image";

const Navbar = ()=>{

const itemsNav = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Categorías',
        link: '/categorias',
    },
        {
        name: 'Recetas',
        link: '/recetas',
    },
    {
        name: 'Contacto',
        link: '/contacto',
    },
]

//ver como se hace responsive la img

return(
    <header className="flex w-full justify-between h-[10vh] content-center flex-wrap">
        <div className="w-1/3 flex gap-8">

        <Image
            src={'/imgs/logo.png'}
            width={50}
            height={50}
            alt="logo"
        />
            
            <p className="font-serif">Mis recetas</p>
        </div>
        <nav>
            <ul className="flex gap-8">
                {itemsNav.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </nav>
    </header>

    );
}

export default Navbar;