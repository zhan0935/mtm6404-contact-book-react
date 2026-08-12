import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import App from './App'
import Home from './pages/Home'
import ContactDetails from './pages/ContactDetails'
import AddContact from './pages/AddContact'
import EditContact from './pages/EditContact'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contacts/:id',
        element: <ContactDetails />
      },
      {
        path: '/new',
        element: <AddContact />
      },
      {
        path: '/contacts/:id/edit',
        element: <EditContact />
      }
    ]
  }
])

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)