import { useState } from 'react'
import './App.css';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import NavBar from "./components/NavBar";

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions(prev => [...prev, newTransaction]);
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  return(
    <>
      <div className="App">
        <div className="row">
          <div className='col-2'>
            <NavBar />
          </div>
          <div className='col-6'>
            <h1 className='mt-3 mb-3'>Mis Transacciones</h1>
            <TransactionList 
              transactions={transactions} 
              onDeleteTransaction={handleDeleteTransaction}
            />
          </div>
          <div className='col-4 col-md-4 mt-5'>
            <AddTransaction onAddTransaction={handleAddTransaction} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
