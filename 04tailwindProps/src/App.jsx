import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    username: "Aakash",
    age: 21
  }

  let newArr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

    <Card  username = "chai aur code" someObje={newArr} btnText="click me"/>
    <Card username = "Aakash Shaw" />
    </>
  )
}

export default App
