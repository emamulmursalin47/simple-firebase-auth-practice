import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import Root from './layouts/Root.jsx';
import { RouterProvider } from 'react-router';
const router=createBrowserRouter(
  [
  {
    path:'/',
    Component:<Root/>,
    children:[

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}/>
  </StrictMode>,
)
