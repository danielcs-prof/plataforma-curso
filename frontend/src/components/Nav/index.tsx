import { Link } from "react-router-dom";

export const Nav = ()=>{
    return(
        <>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/sgcursos" className="nav-link text-white">SGCursos</Link>
                </li>
            </ul>
        </>
    );
}