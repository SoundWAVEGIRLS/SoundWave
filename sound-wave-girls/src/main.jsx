import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {createHashRouter, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import DiscoverPage from './pages/DiscoverPage.jsx'

const router = createHashRouter([
  {
    path:'/',
    element: <HomePage />
  },
  {
    path:'/discover',
    element: <DiscoverPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>     
  </React.StrictMode>,
)
