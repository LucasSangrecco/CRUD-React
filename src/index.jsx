import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from './App'
import Create from './contatos/Create'
import Read from  './contatos/Read'

const router =  createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/contatos/new',
    element: <Create/>
  },
  {
    path:'/contatos',
    element: <Read/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)