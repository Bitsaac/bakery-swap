import React from 'react';
import './App.css';


import { Card, Navbar1, Header } from './components'

const App = () => {
  return (
    <div className='App'>
      <Navbar1 />
      <div className='case'>
        <Header />
        <Card />
      </div>
    </div>
  )
}

export default App