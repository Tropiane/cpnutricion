import { TfiInstagram } from "react-icons/tfi";
import { IoLogoWhatsapp } from "react-icons/io5";


import { NavBar } from "../components/NavBar"
import Form from "../components/Form";

export const Footer = () =>{
    return (
        <footer id="footer">
            <h3 className="font-bold">Montevideo - Uruguay</h3>
            <h4 className="mt-2 border-b-2 border-gray-400 p-2">Tenes dudas? Contáctanos</h4>
            <Form/>
            
            <NavBar isFooter={true}/>
            
            <div className="socialMedia">
                <a href="https://www.instagram.com/cpnutricion/"><TfiInstagram></TfiInstagram></a>
                <a href="https://wa.me/099999999"><IoLogoWhatsapp></IoLogoWhatsapp></a>
            </div>
        </footer>
    )
}