import { BrowserRouter } from "react-router-dom";
import  { Footer } from "./layouts/Footer";
import { Header } from "./layouts/Header";
import { Main } from "./layouts/Main";

export function Cpnutricion() {
    return (
        <>
        <BrowserRouter>

            <Header />

            <Main />
            
            <Footer />

        </BrowserRouter>
        </>
    )
}