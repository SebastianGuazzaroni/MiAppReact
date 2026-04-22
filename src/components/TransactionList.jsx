
import React from "react";
import { TransactionItem } from "./TransactionItem";
import "../css/TransactionList.css";

export function TransactionList({ transactions, onDeleteTransaction }){
    return(
        <div className="TransactionList">
            
            {transactions.length === 0 ? (
                <p className="no-transactions">No hay transacciones aún</p>
            ) : (
                <div>
                    {transactions.map(transaction => (
                        <div key={transaction.id} className="transaction-item-wrapper">
                            <TransactionItem
                                type={transaction.type}
                                date={transaction.date}
                                amount={`$${transaction.amount}`}
                                category={transaction.category}
                            />
                            <button 
                                className="delete-btn"
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