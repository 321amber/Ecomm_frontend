
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import CartItems from './pages/CartItems';
import MainLayout from './MainLayout';
import { AddProducts } from './components/AddProducts';
import { lazy } from 'react';
const MainItems = lazy(()=>import('./pages/MainItems'))

function App() {
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <MainItems /> },
      { path: "/cart", element: <CartItems /> },
      {path:"/Add", element:<AddProducts/>}
    ]
  }
]);
  return (
    <>

      <RouterProvider router={router}/>

    </>
  )
}

export default App
