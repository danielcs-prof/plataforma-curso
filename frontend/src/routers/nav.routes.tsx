import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { SGCursos } from "../pages/SGCursosPage";

export const NavRouter = ()=>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/sgcursos/*" element={<SGCursos/>} />
        </Routes>
    );
}