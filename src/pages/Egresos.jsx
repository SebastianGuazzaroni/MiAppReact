import React from 'react';
import { useState } from 'react';
import { TransactionList } from '../components/TransactionList';
import { AddTransaction } from '../components/AddTransaction';

export function Egresos ({transactions, onDeleteTransaction, onAddTransaction}) {

    return (
        <>          
            <div className='container-fluid px-2 px-md-4'>
                <h1 className='mt-3 mb-4 fs-3 fs-md-2'>Mis Egresos</h1>
                <div className='row g-3'>
                    <div className='col-12 col-lg-8'>
                        <TransactionList 
                            transactions={transactions.filter(t => t.type === 'Egreso')} 
                            onDeleteTransaction={onDeleteTransaction}
                            page="egreso"
                        />
                    </div>
                    <div className='col-12 col-lg-4'>
                        <AddTransaction onAddTransaction={onAddTransaction} />
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Egresos;