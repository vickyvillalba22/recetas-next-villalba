import Image from "next/image";
import Link from "next/link";

const Navbar = ()=>{

const itemsNav = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Categorías',
        link: '/#categories',
    },
        {
        name: 'Recetas',
        link: '/#recipes',
    },
    {
        name: 'Contacto',
        link: '/#contact',
    },
]

// ver como se hace responsive la img
// faltan href de items

return(
    <header className="flex justify-between h-[10vh] content-center flex-wrap w-[90%] items-center sticky top-0 bg-(--claro) z-4">

        <Link href={itemsNav[0].link} className="w-1/3 flex gap-2 items-center">

        <Image
            src={'/imgs/logo.png'}
            width={40}
            height={40}
            alt="logo"
        />
            
            <p className="font-serif">Mis recetas</p>
        </Link>

        <nav>
            <ul className="flex gap-8">
                {itemsNav.map((item, index) => (
                    <Link href={item.link} key={index}>{item.name} </Link>
                ))}
            </ul>
        </nav>
    </header>

    );
}

export default Navbar;