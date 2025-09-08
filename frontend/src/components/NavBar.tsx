const links = [
    {
        id: 1,
        url: "#",
        text: "Inicio",
    },
    {
        id: 2,
        url: "#",
        text: "Sobre Nosotros",
    },
    {
        id: 3,
        url: "#",
        text: "Contacto",
    },
]

export const NavBar = ()=>{
    return(
        <nav>
            <ul>
                {
                    links.map((link) => (
                        <li key={link.id}>
                            <a href={link.url} className="lato-bold-italic">{link.text}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}