import React from 'react';
import { TransactionList } from '../components/TransactionList';
import '../css/Resumen.css';

export function Resumen ({transactions = []}) {

    const total = transactions.reduce((acc, transaction) => {
        return acc + Number(transaction.amount);
    }, 0);

    return(
        <>
            
               <h1>RESUMEN DE INGRESOS Y EGRESOS</h1>
                   <div className='row gx-5 justify-content-between transacciones'>
                        <div className='col-5 ingresos m-4'>
                            <TransactionList transactions={transactions.filter(t => t.type === 'Ingreso')} />
                            Ingresos: {transactions.filter(t => t.type === 'Ingreso').reduce((acc, transaction) => acc + Number(transaction.amount), 0)}   
                        </div>
                   
                        <div className='col-5 egresos m-4'>
                            <TransactionList transactions={transactions.filter(t => t.type === 'Egreso')} />   
                            Egresos: {transactions.filter(t => t.type === 'Egreso').reduce((acc, transaction) => acc + Number(transaction.amount), 0)}
                        </div>  
                    </div>
                <div className='row containerTotal '>
                    <div className='col-12 total '>
                        Total: {total}
                    </div>
                </div>
            
        </>

    );

}

export default Resumen; 