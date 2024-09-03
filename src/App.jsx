import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-full">
    <Navbar />
    <HeroSection />
    </div>
    </>
  )
}

export default App
