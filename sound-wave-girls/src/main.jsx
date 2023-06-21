import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import DiscoverPage from './pages/DiscoverPage.jsx'
import JoinPage from './pages/JoinPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path:'/discover',
    element: <DiscoverPage />
  },
  {
    path:'/join',
    element: <JoinPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>     
  </React.StrictMode>,
)