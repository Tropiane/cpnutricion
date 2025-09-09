import { TfiInstagram } from "react-icons/tfi";
import { IoLogoWhatsapp } from "react-icons/io5";


import { NavBar } from "../components/NavBar"

export const Footer = () =>{
    return (
        <footer>
            <h3 className="nunito-bold-italic">Montevideo - Uruguay</h3>
            <NavBar />

            <div className="socialMedia">
                <TfiInstagram><a href="https://www.instagram.com/cpnutricion/"></a></TfiInstagram>
                <IoLogoWhatsapp><a href="https://wa.me/099999999"></a></IoLogoWhatsapp>
            </div>
        </footer>
    )
}