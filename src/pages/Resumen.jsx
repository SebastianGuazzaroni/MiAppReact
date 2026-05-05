import React from 'react';
import { TransactionList } from '../components/TransactionList';
import '../css/Resumen.css';

export function Resumen ({transactions = []}) {

    const total = transactions.reduce((acc, transaction) => {
        return acc + Number(transaction.amount);
    }, 0);

    return(
        <>
            
               <div className='containerResumen px-2 px-md-4'>
                <h1 className='mt-3 mb-4'>RESUMEN DE INGRESOS Y EGRESOS</h1>
                   <div className='row gx-2 gx-md-5 justify-content-between transacciones mb-4'>
                        <div className='col-12 col-md-5'>
                            <p className='ingresoTitulo'>INGRESOS</p>
                            <p className='ingresoTitulo mt-3'>Subtotal:  {transactions.filter(t => t.type === 'Ingreso').reduce((acc, transaction) => acc + Number(transaction.amount), 0)}  </p>
                            <TransactionList transactions={transactions.filter(t => t.type === 'Ingreso')} page="resumen"/>
                             
                            
                        </div>
                   
                        <div className='col-12 col-md-5'>
                            <p className='egresoTitulo'>EGRESOS</p>
                            <p className='egresoTitulo mt-3'>Subtotal: {transactions.filter(t => t.type === 'Egreso').reduce((acc, transaction) => acc + Number(transaction.amount), 0)}</p> 
                            <TransactionList transactions={transactions.filter(t => t.type === 'Egreso')} page="resumen"/>   
                            
                        </div> 
                        
                    </div>
                    <div className='col-12 total'>
                            TOTAL: {total}
                        </div>
                    
               </div>
            
        </>

    );

}

export default Resumen; 