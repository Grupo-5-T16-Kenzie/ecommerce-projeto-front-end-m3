import React from 'react'
import ReactDOM from 'react-dom/client'
import { ResetStyle } from './styles/reset'
import { GlobalStyles } from './styles/globalStyles'
import { AuthProductsProvider } from './providers/productsContext'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ResetStyle/>
    <GlobalStyles />
    <AuthProductsProvider>
      <App />
    </AuthProductsProvider>
  </React.StrictMode>,
)
