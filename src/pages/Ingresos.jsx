import React from 'react';
import { TransactionList } from '../components/TransactionList';


export function Ingresos ({transactions = [], onDeleteTransaction}) {

    const ingresos = transactions.filter(t => t.type === 'Ingreso');

    return (
        <>          
            <h1 className='mt-3 mb-3'>Mis Ingresos</h1>
            <TransactionList 
                transactions={ingresos}
                onDeleteTransaction={onDeleteTransaction}
            />
        </>

    );
}

export default Ingresos;