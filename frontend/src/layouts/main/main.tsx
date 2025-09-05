import { Route, Routes } from "react-router-dom";
import Home from "./home";
import AboutUs from "../../components/pages/aboutUs";
function Main() {

    return (
    <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quien-soy" element={<AboutUs />} />
        </Routes>
    </main>
    )
}

export default Main