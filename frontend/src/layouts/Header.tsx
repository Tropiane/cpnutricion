import { BgVideo } from "../components/BgVideo"
import { NavBar } from "../components/NavBar"


export const Header = () =>{
    return (
        <header>
            <BgVideo />
            <NavBar />
            <img src="https://drive.google.com/thumbnail?id=1W5rMPo8n299qRZuR78PQxz_dw8Hpiprv&sz=w1000" alt="Image" className="logo" />
            <h1 className="nunito-bold-italic headerTitle">Comer bien, <span>sentirte</span> bien, vivir <span>en equilibrio</span>.</h1>
        </header>
    )
}