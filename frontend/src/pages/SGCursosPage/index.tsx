import { NavLink } from "react-router-dom";
import { TabRouter } from "../../routers/tab.routes";


export const SGCursos = () => {
    return (
        <div className="container">
            <h5>SG - Cursos</h5>
            <hr />
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <NavLink className="nav-link text-dark" to="/sgcursos/trilhas">Trilhas</NavLink>
                </li>
                <li className="nav-item" role="presentation">
                    <NavLink className="nav-link text-dark" to="/sgcursos/cursos">Crusos</NavLink>
                </li>
                <li className="nav-item" role="presentation">
                    <NavLink className="nav-link text-dark" to="/sgcursos/modulos">Modulo</NavLink>
                </li>
                
            </ul>
            <div className="tab-content" id="myTabContent">
                <TabRouter/>
            </div>
        </div>
    );
}