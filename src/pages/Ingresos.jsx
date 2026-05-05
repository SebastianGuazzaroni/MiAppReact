import React from 'react';
import { TransactionList } from '../components/TransactionList';
import { AddTransaction } from '../components/AddTransaction';
import '../css/Ingresos.css';


export function Ingresos({transactions, onDeleteTransaction, onAddTransaction }) {

    return (
        <>
            <div className='container-fluid px-2 px-md-4'>
                <h1 className='mt-3 mb-4 fs-3 fs-md-2'>Mis Ingresos</h1>
                <div className='row g-3'>
                    <div className='col-12 col-lg-8'>
                        <div className='responsiveList'>
                            <TransactionList
                                transactions={transactions.filter(t => t.type === 'Ingreso')}
                                onDeleteTransaction={onDeleteTransaction}
                                page="ingreso"
                            />
                        </div>
                    </div>
                    <div className='col-12 col-lg-4'>
                        <AddTransaction onAddTransaction={onAddTransaction} />
                    </div>
                </div>
            </div>
        </>
        );
}
export default Ingresos;