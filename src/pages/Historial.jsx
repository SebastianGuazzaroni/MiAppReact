import React from 'react';
import { TransactionList } from '../components/TransactionList';

export function Historial ({transactions = []}) {

    return (
        <>          
            <h1 className='mt-3 mb-3'>Mi Historial</h1>
            <TransactionList 
                transactions={transactions} 
                
            />
        </>
    );
}       

export default Historial;