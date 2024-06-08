
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import * as Dashboard from '@/pages/dashboard/';

function App() {

  const router = createBrowserRouter([
    {
      children: [
        {
          path: 'welcome',
          element: <Dashboard.Welcome />
        },
        {
          path: 'details',
          element: <Dashboard.Details />
          
        }
      ]
      
    }
  ]);


  return (
    <RouterProvider router={router} />
  )
}

export default App
