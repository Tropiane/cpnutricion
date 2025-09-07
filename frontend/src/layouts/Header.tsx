import { BgVideo } from "../components/BgVideo"
import { NavBar } from "../components/NavBar"


export const Header = () =>{
    return (
        <header>
            <BgVideo />
            <NavBar />
            <img src="/src/assets/logo.png" alt="Image" className="logo" />
            <h1 className="nunito-bold-italic headerTitle">CPNutricion</h1>
        </header>
    )
}