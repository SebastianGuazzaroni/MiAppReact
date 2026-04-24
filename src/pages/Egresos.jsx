import React from 'react';
import { useState } from 'react';
import { TransactionList } from '../components/TransactionList';
import { AddTransaction } from '../components/AddTransaction';

export function Egresos ({transactions = [], onDeleteTransaction}) {

    
      const handleAddTransaction = (newTransaction) => {
        setTransactions(prev => [...prev, newTransaction]);
      };
    
      const handleDeleteTransaction = (id) => {
        setTransactions(prev => prev.filter(t => t.id !== id));
      };
    

    return (
        <>          
            <div className='container'>
                <div className='row'>
                    <h1 className='mt-3 mb-3'>Mis Egresos</h1>
                    <div className='col-12 col-md-8 mt-5 responsiveList'>
                        <TransactionList 
                        transactions={transactions.filter(t => t.type === 'Egreso')} 
                        onDeleteTransaction={onDeleteTransaction}
                        
                    />
                    </div>
                    <div className='col-12 col-md-4 mt-3'>
                    <AddTransaction onAddTransaction={handleAddTransaction} />
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Egresos;