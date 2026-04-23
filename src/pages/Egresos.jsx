import React from 'react';
import { TransactionList } from '../components/TransactionList';


export function Egresos ({transactions = [], onDeleteTransaction}) {

    return (
        <>          
            <h1 className='mt-3 mb-3'>Mis Egresos</h1>
            <TransactionList 
                transactions={transactions.filter(t => t.type === 'Egreso')} 
                onDeleteTransaction={onDeleteTransaction}
            />
        </>
    );
}

export default Egresos;