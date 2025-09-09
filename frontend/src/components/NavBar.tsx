import { RxHamburgerMenu } from "react-icons/rx";

const links = [
    {
        id: 1,
        url: "#",
        text: "Inicio",
    },
    {
        id: 2,
        url: "#",
        text: "Sobre Mi",
    },
    {
        id: 3,
        url: "#",
        text: "Contacto",
    },
]

export const NavBar = ({isFooter} : {isFooter?: boolean})=>{
    const mobile = window.matchMedia("(max-width: 480px)");

    if(mobile.matches && !isFooter){
        return(
            <nav>
                <details>
                    <summary><RxHamburgerMenu /></summary>
                    <ul>
                        {
                            links.map((link) => (
                                <li key={link.id}>
                                    <a href={link.url} className="lato-bold-italic">{link.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </details>
            </nav>
        )
    }
    if(isFooter){
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