import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import Products from './Component/Products/Products'
import Category from './Component/Category/Category'
import Brands from './Component/Brands/Brands'
import Register from './Component/Register/Register'
import Login from './Component/Login/Login'
import NotFound from './Component/NotFound/NotFound'

export default function App() {
  let x = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { path: "home", element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "category", element: <Category /> },
        { path: "brands", element: <Brands /> },
        { index: true, element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "*", element: <NotFound /> },
      ]
    },

  ])
  return (
    <div>
      <RouterProvider router={x}></RouterProvider>
    </div>
  )
}
