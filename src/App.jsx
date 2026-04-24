import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { NavBar } from './components/NavBar';
import { Ingresos } from './pages/Ingresos';
import { Egresos } from './pages/Egresos';
import {Historial} from './pages/Historial';
import { Resumen } from './pages/Resumen';  

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
            <div className='col-10'>
              <Routes>
                <Route path='/ingresos' element={
                  <Ingresos 
                    transactions={transactions}
                    onDeleteTransaction={handleDeleteTransaction}
                  />
              } />
                <Route path='/egresos' element={
                  <Egresos 
                    transactions={transactions}
                    onDeleteTransaction={handleDeleteTransaction}
                  />
                } />
                  <Route path='/historial' element={
                    <Historial
                    transactions={transactions}
                    
                    />
                  } />
                  <Route path='/resumen' element={
                    <Resumen 
                      transactions={transactions}
                      />
                  } 
                  /> 
              </Routes>
            </div>
            
          </div>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App
