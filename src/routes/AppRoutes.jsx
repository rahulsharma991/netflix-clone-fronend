import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from '../components/auth/Login';
import Browse from '../layout/Browse';
import Signup from '../components/auth/Signup';
const AppRoutes = () => {
    const appRouter = createBrowserRouter([
        {
          path: '/',
          element: <Login />
        },
        {
            path: '/signup',
            element: <Signup/>
        },
        {
          path: '/browse',
          element: <Browse />
        }
      ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default AppRoutes
