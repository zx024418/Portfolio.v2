import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './components/Nav'
import './index.css'
import HomePage from '../src/pages/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <RouterProvider router={router}/>
  </StrictMode>,
)
