import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Author from './pages/Author.jsx'
import Blogs from './pages/Blogs.jsx'
import CategoryPosts from './pages/CategoryPosts.jsx'
import PostDetail from './pages/PostDetail.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import UserProfile from './pages/UserProfile.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
      children:[
        {index: true, element: <Home />},
        {path: "author", element: <Author/>},
        {path: "blogs", element: <Blogs />},
        {path: "posts/catergories/catergory", element: <CategoryPosts/>},
        {path: "posts/:id", element: <PostDetail />},
        {path: "register", element: <Register />},
        {path: "login", element: <Login />},
        {path: "profile/:id", element: <UserProfile />},
        {path: "posts/:id", element: <PostDetail />},
        {path: "posts/:id", element: <PostDetail />},
      ]
    }
  ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
