import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <Sidebar />
      <Footer />
    </>
  )
}

export default App
