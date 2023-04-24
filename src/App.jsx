import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Componentes/Header'
import Section from './Componentes/Section'
import Footer from './Componentes/Footer'

function App() {
  return (
    <>
      <div>
        <Header/>
        <Section/>
        <Footer/>
      </div>
       
    </>
  )
}

export default App
