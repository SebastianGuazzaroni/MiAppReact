import React from "react";
import { TransactionItem } from "./TransactionItem";
import "../css/TransactionList.css";

export function TransactionList({ transactions, onDeleteTransaction, page=""}){
    return(
        <div className="TransactionList rounded-3">
            
            {transactions.length === 0 ? (
                <p className="no-transactions">No hay transacciones aún</p>
            ) : (
                <div>
                    {transactions.map(transaction => (
                        <div key={transaction.id} className="transaction-item-wrapper d-flex justify-content-between align-items-center flex-wrap">
                            <TransactionItem
                                type={transaction.type}
                                date={transaction.date}
                                amount={`$${transaction.amount}`}
                                category={transaction.category}
                                description={transaction.description}
                                variant={page}
        
                            />
                            <button 
                                className="delete-btn ms-2"
                                onClick={() => onDeleteTransaction(transaction.id)}
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}