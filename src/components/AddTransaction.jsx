import React, { useState } from "react";
import "../css/AddTransaction.css";

export function AddTransaction({ onAddTransaction }){
    const [formData, setFormData] = useState({
        type: "Egreso",
        category: "Comida",
        amount: "",
        date: new Date().toLocaleDateString('en-CA'),
        description: "Sin descripcion"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.amount && formData.category) {
            onAddTransaction({
                id: Date.now(),
                ...formData
            });
            setFormData({
                type: "Egreso",
                category: "Comida / Bebida",
                amount: "",
                date: new Date().toLocaleDateString('en-CA'),
                description: "Sin descripcion"
            });
        }
    };

    return(
        <div className="container AddTransactionForm">
            <h3>Agregar Transacción</h3>
            <form className="" onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col">
                        <label>Tipo:</label>
                        <select className="category" name="type" value={formData.type} onChange={handleChange}>
                            <option value="Ingreso">Ingreso</option>
                            <option value="Egreso">Egreso</option>
                        </select>
                    </div>
                    
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label>Categoría:</label>
                        <select name="category" value={formData.category}>
                            <option value="Comida/Bebida">Comida / Bebida</option>
                            <option value="Oscio">Oscio</option>
                            <option value="Alquiler">Alquiler</option>
                            <option value="Ahorros">Ahorros</option>
                            <option value="Varios">Varios</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label>Monto:</label>
                        <input 
                            className="amount" 
                            type="number" 
                            name="amount" 
                            value={formData.amount} 
                            onChange={handleChange}
                            placeholder="$0.00"
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                    <label>Fecha:</label>
                    <input 
                        type="date" 
                        name="date" 
                        value={formData.date} 
                        onChange={handleChange}
                    />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input 
                        type={formData.description}
                        name="description"
                        placeholder="Sin descripcion" 
                        />
                    </div>
                </div>
                
                <button className="mb-3 mt-2"type="submit">Agregar Transacción</button>
            </form>
        </div>
    );
}