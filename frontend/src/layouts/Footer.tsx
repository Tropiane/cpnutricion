import { TfiInstagram } from "react-icons/tfi";
import { IoLogoWhatsapp } from "react-icons/io5";


import { NavBar } from "../components/NavBar"

export const Footer = () =>{
    return (
        <footer>
            <h3 className="nunito-bold-italic">Montevideo - Uruguay</h3>
            <NavBar isFooter={true}/>

            <div className="socialMedia">
                <a href="https://www.instagram.com/cpnutricion/"><TfiInstagram></TfiInstagram></a>
                <a href="https://wa.me/099999999"><IoLogoWhatsapp></IoLogoWhatsapp></a>
            </div>
        </footer>
    )
}