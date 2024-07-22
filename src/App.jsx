import React from 'react'
import Header from './Components/Header'
import { createBrowserRouter, Outlet, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body1 from './Components/Body1';
import About from './Components/About';
import Error from './Components/Error';
import Offers from './Components/Offers';
import Api from './Components/api';


function App() {

  return (
    <div>
    
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <Body1 />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/offers",
      element: <Offers />
    },
  {
    path:"/help/:resId",
    element: <Api/>
  }],
    errorElement: <Error />
  },

])

export default appRouter