import React from 'react';
import { useState } from 'react';
import { TransactionList } from '../components/TransactionList';

export function Historial ({transactions = []}) {  

    return (
        <>          
            <div className='container-fluid px-2 px-md-4'>
                <h1 className='mt-3 mb-4'>Mi Historial</h1>
                
                <div className='row'>
                    <div className='col-12'>
                        <TransactionList 
                            transactions={transactions} 
                            page="historial"
                            
                        />
                    </div>
                </div>
            </div>
        </>
    );
}       

export default Historial;
