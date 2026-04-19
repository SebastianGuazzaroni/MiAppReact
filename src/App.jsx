import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
import { TransactionItem } from './components/TransactionItem';
import NavList from "./components/NavList";
import { AddTransaction } from './components/AddTransaction';



function App() {

    return(<div className="App">
      
      <div className="row">
        <div className='col'>
          <NavList
           
          />
        </div>
        <div className='col'>
            <AddTransaction />
       
        </div>
      </div>
    

    </div>);


}

export default App
