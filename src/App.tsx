import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { SnackProvider } from './contexts/SnackContext'
import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import { CartProvider } from './contexts/CartContext'
import { ToastContainer } from 'react-toastify'
import { UsuariosProvider } from './contexts/UserContext'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <SnackProvider>
          <UsuariosProvider>
          <CartProvider>
            <AppRoutes />
            <ToastContainer autoClose={2000} />
            <GlobalStyle />
            <Normalize />
          </CartProvider>
          </UsuariosProvider>
        </SnackProvider>
      </Theme>
    </BrowserRouter>
  )
}
