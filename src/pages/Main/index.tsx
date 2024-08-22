import { Container } from './styles'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/sidebar'
import logoImg from '../../assets/logo.svg'
import { MyOrder } from '../../components/myOrder'

export default function Main() {
  return (
    <Container>
      <Sidebar />
        <section>
           <img src={logoImg} className='logo'/>
           <Outlet />
        </section>
      <MyOrder />
    </Container>
  )
}
