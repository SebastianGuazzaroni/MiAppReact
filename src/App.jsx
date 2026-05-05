import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { NavBar } from './components/NavBar';
import { Ingresos } from './pages/Ingresos';
import { Egresos } from './pages/Egresos';
import { Historial } from './pages/Historial';
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
          <div className="row overflow-auto g-0">
            <div className='col-12 col-md-3 col-lg-2'>
              <NavBar />
            </div>
            <div className='col-12 col-md-9 col-lg-10'>
              <Routes>
                <Route path='/' element={
                  <Ingresos
                    transactions={transactions}
                    onDeleteTransaction={handleDeleteTransaction}
                    onAddTransaction={handleAddTransaction}
                  />
              }/>
                <Route path='/ingresos' element={
                  <Ingresos 
                    transactions={transactions}
                    onDeleteTransaction={handleDeleteTransaction}
                    onAddTransaction={handleAddTransaction}
                  />
              } />
                <Route path='/egresos' element={
                  <Egresos 
                    transactions={transactions}
                    onDeleteTransaction={handleDeleteTransaction}
                    onAddTransaction={handleAddTransaction}
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
