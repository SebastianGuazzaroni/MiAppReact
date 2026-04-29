import React from 'react';
import { TransactionList } from '../components/TransactionList';
import { AddTransaction } from '../components/AddTransaction';
import '../css/Ingresos.css';


export function Ingresos({transactions, onDeleteTransaction, onAddTransaction }) {

    return (
        <>
            <div className='container'>
                <h1 className='mt-3 mb-3'> Mis Ingresos </h1>
                <div className='row'>
                    <div className='col-12 col-md-8 mt-5 responsiveList'>
                        <TransactionList
                            transactions={transactions.filter(t => t.type === 'Ingreso')}
                            onDeleteTransaction={onDeleteTransaction}
                        />
                    </div>
                    <div className='col-12 col-md-4 mt-3'>
                        <AddTransaction onAddTransaction={onAddTransaction} />
                    </div>
                </div>
            </div>
        </>
        );
}
export default Ingresos;