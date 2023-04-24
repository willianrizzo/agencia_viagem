import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Section from './Componentes/Section'
import Canyon from './Pages/Canyon'
import Escocia from './Pages/Escocia'
import China from './Pages/China'
import Aruba from './Pages/Aruba'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Section />
      },
      {
        path: '/canyon',
        element: <Canyon />
      },
      {
        path: '/escocia',
        element: <Escocia />
      },
      {
        path: '/china',
        element: <China />
      },
      {
        path: '/aruba',
        element: <Aruba />
      }
      // nested routes = identificador unico
      
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)

