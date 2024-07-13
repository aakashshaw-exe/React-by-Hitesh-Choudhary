import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15


  const addValue = () => {
    // counter = counter +1 
    setCounter(counter <20 ? counter + 1: counter)
    // console.log("clicked",counter);
  }

  const removeValue = () => {
    setCounter(counter > 0 ? counter - 1: counter)
   
  }
// for interview purpose
// we will use callback function if we have perform same operation multiple time 
// if we dont callback function the react UI will not update it each time as it goes in bundle/ batches
  // const addValue = () => {
  //   setCounter(prevCounter => prevCounter + 1)
  //   setCounter(prevCounter => prevCounter + 1)
  //   setCounter(prevCounter => prevCounter + 1)
  //   setCounter(prevCounter => prevCounter + 1)
  // }

  return (
    <>
      <h1>Chai aur react </h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br></br> <br></br> 
      <button onClick={removeValue} >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
