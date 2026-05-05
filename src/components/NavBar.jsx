import { Link } from "react-router-dom";
import React from "react";
import "../css/NavBar.css";
import { TransactionItem } from "./TransactionItem";

export function NavBar(){
  return (
    <div className="navBar">
        <nav className="navList ps-2 ps-md-3">
            <h2 className="navTittle">Menú</h2>
            <ul className="list-unstyled">
                <li className="mb-2"><Link to="/Ingresos">Ingresos</Link></li>
                <li className="mb-2"><Link to="/Egresos">Egresos</Link></li>
                <li className="mb-2"><Link to="/Historial">Historial</Link></li>
                <li className="mb-2"><Link to="/Resumen">Resumen</Link></li>
                <li className="mb-2"><a href="#">Configuración</a></li>
            </ul>
        </nav>
    </div>
    
  );
};

export default NavBar;