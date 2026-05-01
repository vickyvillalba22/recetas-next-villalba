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

// ver como se hace responsive la img
// faltan href de items

return(
    <header className="flex justify-between h-[10vh] content-center flex-wrap w-[90%] items-center">

        <div className="w-1/3 flex gap-2 items-center">

        <Image
            src={'/imgs/logo.png'}
            width={40}
            height={40}
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