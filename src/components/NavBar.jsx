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
                <li><a href="#">Egresos</a></li>
                <li><a href="#">Historial</a></li>
                <li><a href="#">Resumen</a></li>
                <li><a href="#">Configuración</a></li>
            </ul>
        </nav>
    </div>
    
  );
};

export default NavBar;