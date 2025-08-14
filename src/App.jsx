import { useState } from 'react'
import Navbar from './component/Navbar'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Item from './pages/Item';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home/>
        <Footer/>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
       <Footer/>
      </>
    ),
  },
    {
    path: "/product",
    element: (
      <>
        <Navbar />
        <Item />
       <Footer/>
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact/>
       <Footer/>
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Navbar />
        <Cart/>
       <Footer/>
      </>
    ),
  },
  {
    path: "/account",
    element: (
      <>
        <Navbar />
        <Account/>
       <Footer/>
      </>
    ),
  },

  
]);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <RouterProvider router={router}/>
    </>
  )
}

export default App
