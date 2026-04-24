import React from 'react';
import { TransactionList } from '../components/TransactionList';
import { useState } from 'react';
import '../css/Resumen.css';

export function Resumen ({transactions = []}) {

    const total = transactions.reduce((acc, transaction) => {
        return acc + Number(transaction.amount);
    }, 0);

    return(
        <>
            <div className='container px-4 text-center containerResumen '>
               <h1>RESUMEN DE INGRESOS Y EGRESOS</h1>
                   <div className='row gx-5 justify-content-center'>
                        <div className='col-6 ingresos m-4'>
                            Ingresos: {transactions.filter(t => t.type === 'Ingreso').reduce((acc, transaction) => acc + Number(transaction.amount), 0)} 
                            <TransactionList transactions={transactions.filter(t => t.type === 'Ingreso')} />   
                        </div>
                   
                        <div className='col-6 egresos m-4'>
                            Egresos: {transactions.filter(t => t.type === 'Egreso').reduce((acc, transaction) => acc + Number(transaction.amount), 0)}
                            <TransactionList transactions={transactions.filter(t => t.type === 'Egreso')} />   
                        </div>  
                    </div>
                <div className='row containerTotal m-4'>
                    <div className='col-12 total m-4'>
                        Total: {total}
                    </div>
                </div>
            </div>
        </>

    );

}

export default Resumen; 