import React from 'react'
import ReactDOM from 'react-dom/client'
import { ResetStyle } from './styles/reset'
import { AuthProductsProvider } from './providers/productsContext'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ResetStyle/>
    <AuthProductsProvider>
      <App />
    </AuthProductsProvider>
  </React.StrictMode>,
)
