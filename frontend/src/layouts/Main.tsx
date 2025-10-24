import {Route, Routes} from "react-router-dom"
import { TicketsManager } from "../pages/TicketsManager"
import Home from "../pages/Home"
import { Login } from "../pages/Login"

export const Main = () =>{
    return (
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/ticket-manager" element={<TicketsManager />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
    )
}