import {Route, Routes} from "react-router-dom"

import { TicketsManager } from "../components/pages/TicketsManager"
import Home from "../components/pages/Home"
import { Login } from "../components/pages/Login"

export const Main = () =>{
    return (
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/tickets-manager" element={<TicketsManager />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
    )
}