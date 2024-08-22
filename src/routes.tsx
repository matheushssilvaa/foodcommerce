import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgesPage from './pages/Main/Burgers'
import Pizzas from './pages/Main/Pizzas'
import Bebidas from './pages/Main/Bebidas'
import Sobremesas from './pages/Main/Sobremesas'
import MyCartPage from './pages/myCart'
import Login from './pages/login'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
      <Route path='/' element={<BurgesPage />} />
      <Route path='/pizzas' element={<Pizzas />} />
      <Route path='/bebidas' element={<Bebidas />} />
      <Route path='/sobremesas' element={<Sobremesas />} />
      </Route>
      <Route path='/cart' element={<MyCartPage />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}
