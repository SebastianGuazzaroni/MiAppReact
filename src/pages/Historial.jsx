import React from 'react';
import { useState } from 'react';
import { TransactionList } from '../components/TransactionList';

export function Historial ({transactions = []}) {

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [ordenMonto, setOrdenMonto] = useState('ninguno');
    const [ordenFecha, setOrdenFecha] = useState('Reciente');    

    const categorias = ['Todas', ...new Set(transactions.map(t => t.category))];
    

    let transaccionesFiltradas = categoriaSeleccionada === '' || categoriaSeleccionada === 'Todas'  
        ? transactions 
        : transactions.filter(t => t.category === categoriaSeleccionada);

    if(ordenMonto === 'mayor'){
        transaccionesFiltradas = [...transaccionesFiltradas].sort((a, b) => Number(b.amount) - Number(a.amount));
    }else if (ordenMonto === 'menor'){
        transaccionesFiltradas = [...transaccionesFiltradas].sort((a, b) => Number(a.amount) - Number(b.amount));   
    }
    

    return (
        <>          
            <div className='container-fluid px-2 px-md-4'>
                <h1 className='mt-3 mb-4'>Mi Historial</h1>
                <div className='row g-2 mb-4'>
                    <div className='col-12 col-sm-6 col-md-3'>
                        <select 
                            value={categoriaSeleccionada}
                            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                            className="form-select form-select-sm"
                        >
                            <option value="" disabled selected>categoría</option>
                            {categorias.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                    <div className='col-12 col-sm-6 col-md-3'>
                        <select 
                            value={ordenMonto}
                            onChange={(e) => setOrdenMonto(e.target.value)}
                            className="form-select form-select-sm"
                        >
                            <option value="ninguno">Monto: Sin orden</option>
                            <option value="mayor">Mayor monto</option>
                            <option value="menor">Menor monto</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <TransactionList 
                        transactions={transaccionesFiltradas} 
                        page="historial"
                        
                    />
                    </div>
                </div>
            </div>
        </>
    );
}       

export default Historial;