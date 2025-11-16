import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
    <div className='container'>
     <div className='p-5 text-center bg-light-dark rounded'>
      <h1 className='text-light'>Stock Prediction Portal</h1>
      <p className='text-light lead'>This stock prediction application utilize machine learning techniques, specifically employing keras, and LSTM model,integrated within the Django Framework.It forecast future stock prices by analyzing 100-day and 200-day moving averages,essential indicators widely used by stock analyst to inform trading and investment decision.</p>
     <Button text='Login Now'class='btn-info'/>
     </div>
   </div>
   </>
   
  )
}

export default Main