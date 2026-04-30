import React, { useState } from "react";
import "../css/AddTransaction.css";

export function AddTransaction({ onAddTransaction }){
    const [formData, setFormData] = useState({
        type: "Egreso",
        category: "Comida / Bebida",
        amount: "",
        date: new Date().toLocaleDateString('en-CA'),
        description:""
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
            
            if(formData.type === "Egreso"){
                formData.amount = -Math.abs(formData.amount);
            }

            const transactionData = {
                id: Date.now(),
                ...formData
            };

            if (!formData.description){
                delete transactionData.description;
            }

            onAddTransaction(transactionData);

            setFormData({
                type: formData.type,
                category: "Comida / Bebida",
                amount: "",
                date: new Date().toLocaleDateString('en-CA'),
                description: ""
            });
        }
        
    };

    return(
        <div className="container AddTransactionForm rounded-3">
            <h3>Agregar Transacción</h3>
            <form className="" onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col">
                        <label className="me-2">
                            Tipo:
                        </label>
                        <label className="m-3">
                            <input className="m-1 ingreso" type="radio" name="type" value="Ingreso" checked={formData.type === "Ingreso"} onChange={handleChange}/>
                            Ingreso
                        </label>
                        <label className="m-2">
                            <input className="m-1 egreso" type="radio" name="type" value="Egreso" checked={formData.type === "Egreso"} onChange={handleChange} />
                            Egreso
                        </label>
                    </div>
                <hr className="ms-3"/>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label className="me-3" >Categoría:</label>
                        <select name="category" value={formData.category} onChange={handleChange}>
                            <option value="Comida/Bebida">Comida / Bebida</option>
                            <option value="Oscio">Oscio</option>
                            <option value="Alquiler">Alquiler</option>
                            <option value="Ahorros">Ahorros</option>
                            <option value="Varios">Varios</option>
                        </select>
                    </div>
                </div>
                <hr className="ms-2"/>
                <div className="row mb-3">
                    <div className="col">
                        <label className="me-3" >Monto:</label>
                        <input 
                            className="amount" 
                            type="text" 
                            name="amount" 
                            value={formData.amount} 
                            onChange={handleChange}
                            placeholder="$0.00"
                            required
                        />
                    </div>
                </div>
                <hr className="ms-2"/>
                <div className="row">
                    <div className="col">
                        <label className="me-3">Fecha:</label>
                        <input 
                            type="date" 
                            name="date" 
                            value={formData.date} 
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <hr className="ms-2"/>
                <div className="row">
                    <div className="col">
                        <input 
                        value={formData.description}
                        name="description"
                        placeholder="Sin descripcion" 
                        onChange={handleChange}
                        />
                    </div>
                </div>
                <hr className="ms-2"/>
                <button className="mb-3 mt-3"type="submit">Agregar Transacción</button>
            </form>
        </div>
    );
}

export default AddTransaction;