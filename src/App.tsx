import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { routeTree } from './routeTree.gen'
import { createRouter, RouterProvider } from '@tanstack/react-router'

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface RegisterRouter {
    router: typeof router
  } 
}

function App() {

  return <RouterProvider router={router} />
}

export default App
