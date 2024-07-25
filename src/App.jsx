import React from 'react'
import Header from './Components/Header'
import { createBrowserRouter, Outlet, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body1 from './Components/Body1';
import About from './Components/About';
import Error from './Components/Error';
import Offers from './Components/Offers';
import Api from './Components/api';
import RestaurantMenu from './Components/RestaurantMenu';
import Cart from './Components/Cart';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';


function App() {

  return (
    <Provider store={appStore}>
       <div>
    
    <Header />
    <Outlet />
  </div>
  
    </Provider>
   
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
path:"/cart",
element:<Cart/>
    },
  {
    path:"/help/:resId",
    element: <Api/>
  },
{
  path:"/menu/:resID",
  element:<RestaurantMenu/>
}],
    errorElement: <Error />
  },

])

export default appRouter