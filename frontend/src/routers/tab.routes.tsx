import { Route, Routes } from "react-router-dom";
import { TrilhaPage } from "../pages/SGCursosPage/TrilhaPage";
import { CursoPage } from "../pages/SGCursosPage/CursoPage";
import { ModuloPage } from "../pages/SGCursosPage/ModuloPage";

export const TabRouter = ()=>{
    return(
        <Routes>
            <Route path="trilhas" element={<TrilhaPage/>}/>
            <Route path="cursos" element={<CursoPage/>}/>
            <Route path="modulos" element={<ModuloPage/>}/>
        </Routes>
    );
}