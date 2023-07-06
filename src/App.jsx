import React from 'react'
import Exchangerate from './Components/ExchangeRate'
import Newsfeed from './Components/newsFeed'
import CurrencyConverter from './Components/currencyConverter'
function App() {
  return (
   <div className='app'>
    <div className='flex justify-center text-center'>
      <h1>Cryptocurrency Dashboard</h1>
    </div>
    <div className='flex flex-col mr-14 md:mr-0 space-x-12 md:flex-row'>
        <CurrencyConverter/>
        <Newsfeed/>
    
    </div>
   </div>
  )
}

export default App