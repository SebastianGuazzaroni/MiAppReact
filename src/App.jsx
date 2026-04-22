import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { NavBar } from './components/NavBar';
import { Ingresos } from './pages/Ingresos';

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
        <BrowserRouter>
          <div className="row">
            <div className='col-2'>
              <NavBar />
            </div>
            <div className='col-6'>
              <Routes>
                <Route path='/ingresos' element={
                  <Ingresos 
                    transactions={transactions}
                    onDeleteTransaction={handleDeleteTransaction}
                  />
              } />
              </Routes>
            </div>
            <div className='col-4 col-md-4 mt-5'>
              <AddTransaction onAddTransaction={handleAddTransaction} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App
