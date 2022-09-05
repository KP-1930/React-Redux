import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {incNumber , decNumber} from './actions/index'

function App() {

  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()

  return (
    <div>

      <div className='container'>
      <h1>Increment / Decrement Counter</h1>

      <div>
        <button className='quantity_minus' title='Decrement' onClick={() => dispatch(decNumber(2))}><span> - </span></button>
        <input type='text' name='quantity' className='quantity_input'  value={myState}/>
        <button className='quantity_plus' title='Increment' onClick={() => dispatch(incNumber(5))}><span> +</span></button>
      </div>

      </div>
    </div>
  )
}

export default App