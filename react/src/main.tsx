import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Page1 from './pages/page1.tsx'
import Page2 from './pages/page2.tsx'
import Page3 from './pages/page3.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Page1 />,
      },
      {
        path: '/page2',
        element: <Page2 />,
      },
      {
        path: '/page3',
        element: <Page3 />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
