import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'

import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <div>
        <Header/>
        <Outlet />
        <Footer/>
      </div>
    </>
  )
}

export default App
