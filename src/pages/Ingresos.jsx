import React from 'react';
import { TransactionList } from '../components/TransactionList';
import { useState } from 'react';

export function Ingresos ({transactions = [], onDeleteTransaction}) {

    return (
        <>          
            <h1 className='mt-3 mb-3'>Mis Ingresos</h1>
            <TransactionList 
                transactions={transactions} 
                onDeleteTransaction={onDeleteTransaction}
            />
        </>

    );
}

export default Ingresos;