
import React from "react";
import "../App.css";
import { TransactionItem } from "./TransactionItem";

const NavList = () => {
  return (
    <div className="nav-container">
      <nav className="nav-list">
        <h2 className="nav-title">Menú</h2>

        <ul>
          <li><a href="#">Ingresos</a></li>
          <li><a href="#">Egresos</a></li>
          <li><a href="#">Compras</a></li>
          <li><a href="#">Pagos</a></li>
          <li><a href="#">Historial</a></li>
          <li><a href="#">Resumen</a></li>
          <li><a href="#">Configuración</a></li>
        </ul>
      </nav>
       <div className="row mt-5 content">
            <div className="row mb-0">
                 <div className="col">
                    <TransactionItem
                        title="Gasto"
                        type=""
                        mount='$1500'
                    />
                </div>
            </div>
             <div className="row">
                 <div className="col">
                    <TransactionItem
                        title="Gasto"
                        type=""
                        mount='$1500'
                    />
                </div>
            </div>
             <div className="row mb-0">
                 <div className="col">
                    <TransactionItem
                        title="Gasto"
                        type=""
                        mount='$1500'
                    />
                </div>
            </div>

       </div>
    </div>
  );
};

export default NavList;