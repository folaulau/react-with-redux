import './App.css';
import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './store/cart.js';

function App() {

  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()

  const incrementBtn = () => {
    console.log("increment value")
    dispatch(increment())
  }

  const decrementBtn = () => {
    console.log("decrement value")
    dispatch(decrement())
  }

  return (
    <div className="container">
      <div className='row'>
        <div className='col-12'>
          
          <div className='row'>
            <div className='col-12'>
            <Header />
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              Home
              <button
          type='button'
          className='btn btn-outline-primary'
          onClick={() => incrementBtn()}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
         type='button'
         className='btn btn-outline-primary'
          onClick={() => decrementBtn()}
        >
          Decrement
        </button>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
            <Footer />
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
