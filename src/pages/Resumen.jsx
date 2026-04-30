import React from 'react';
import { TransactionList } from '../components/TransactionList';
import '../css/Resumen.css';

export function Resumen ({transactions = []}) {

    const total = transactions.reduce((acc, transaction) => {
        return acc + Number(transaction.amount);
    }, 0);

    return(
        <>
            
               <div className='containerResumen'>
                <h1>RESUMEN DE INGRESOS Y EGRESOS</h1>
                   <div className='row gx-5 justify-content-between transacciones  overflow-auto'>
                        <div className='col-5 '>
                            <p className='ingresoTitulo'>INGRESOS</p>
                            <TransactionList transactions={transactions.filter(t => t.type === 'Ingreso')} page="resumen"/>
                            <p className='ingresoTitulo'>INGRESOS:  {transactions.filter(t => t.type === 'Ingreso').reduce((acc, transaction) => acc + Number(transaction.amount), 0)}  </p> 
                            
                        </div>
                   
                        <div className='col-5'>
                            <p className='egresoTitulo'>EGRESOS</p>
                            <TransactionList transactions={transactions.filter(t => t.type === 'Egreso')} page="resumen"/>   
                            <p className='egresoTitulo'>EGRESOS: {transactions.filter(t => t.type === 'Egreso').reduce((acc, transaction) => acc + Number(transaction.amount), 0)}</p> 
                        </div> 
                        
                    </div>
                    <div className='col-12 total '>
                            Total: {total}
                        </div>
                    
               </div>
            
        </>

    );

}

export default Resumen; 