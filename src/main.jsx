import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Error from './components/Error.jsx'
import HomePage, {loader as homePageLoader} from './pages/HomePage.jsx'
import BlogPage, {loader as blogPageLoader} from './pages/BlogPage.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route
      index
      element={<HomePage />}
      errorElement={<Error />}
      loader={homePageLoader}
    />
    <Route
      path='/:slug'
      element={<BlogPage />}
      errorElement={<Error />}
      loader={blogPageLoader}
    />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
