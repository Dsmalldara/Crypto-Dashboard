import React from 'react'
// import CurrencyConverter from './currencyConverter'
function Exchangerate({exchangeRate,primarycurrency,secondarycurrency}) {
  return (
    <div>
 <h2 className='mt-3 flex '><div className='flex text-base text-black font-semibold'> exchange rate for secondary currency</div> : {exchangeRate}</h2>
   <div className='flex flex-row space-x-3'> <div className=' font-bold  text-base'> {primarycurrency} </div> <span> to </span>  <div className='font-bold text-base'>{secondarycurrency}</div></div>
    </div>
  )
}

export default Exchangerate