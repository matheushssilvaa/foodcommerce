import logoImg from '../../assets/logo.svg'
import { Container } from './style'
import { UserInfoData } from '../user'
import { useUser } from '../../hooks/useUser'

export default function OrderHeader() {

    return (
        <Container>
            <img src={logoImg} alt="Food Commerce" />
            <UserInfoData/>
        </Container>
    )
}