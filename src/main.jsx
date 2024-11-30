import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AddCoffee from '../src/components/AddCoffee.jsx'
import UpdateCoffee from '../src/components/UpdateCoffee.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Main from './components/Main.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "addcoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "updatecoffee",
        element: <UpdateCoffee></UpdateCoffee>,
      },
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
