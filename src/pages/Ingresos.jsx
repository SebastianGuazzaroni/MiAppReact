import React from 'react';
import { TransactionList } from '../components/TransactionList';
import { useState } from 'react';
import '../css/Ingresos.css';

export function Ingresos ({transactions = [], onDeleteTransaction}) {

    
    return (
        <>          
            <div className='container'>
                <h1 className='mt-3 mb-3 titulo'> Mis Ingresos </h1>
                <TransactionList 
                    transactions = {transactions} 
                    onDeleteTransaction = {onDeleteTransaction}
                />

            </div>
        </>

    );
}

export default Ingresos;