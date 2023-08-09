import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import Card from './components/card'
import Data from './assets/data'

function App() {

  let Details = Data.map( items => {
    return <Card 
      key={items.title}
      {...items}
    />
  }
); 

  return (
    <div className='container'>
      <Header />
      <section>
        {Details} 
      </section>
    </div>
  )
}

export default App
