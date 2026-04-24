import { Link } from "react-router-dom";
import React from "react";
import "../css/NavBar.css";
import { TransactionItem } from "./TransactionItem";

export function NavBar(){
  return (
    <div className="row navBar">
        <nav className="col-2 navList">
            <h2 className="navTittle">Menú</h2>
            <ul>
                <li><Link to="/Ingresos">Ingresos</Link></li>
                <li><Link to="/Egresos">Egresos</Link></li>
                <li><Link to="/Historial">Historial</Link></li>
                <li><Link to="/Resumen">Resumen</Link></li>
                <li><a href="#">Configuración</a></li>
            </ul>
        </nav>
    </div>
    
  );
};

export default NavBar;