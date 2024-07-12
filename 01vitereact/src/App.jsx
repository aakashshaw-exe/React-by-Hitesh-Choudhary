import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './Chai' 

function App() {
  const username = "chai aur code"

  return (
    <>
    <Chai/>
    <h1>Chai is greater than coffee {username}</h1>
    <p>Test para</p>
    </>
    
  )
}

export default App
