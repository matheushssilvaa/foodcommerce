import { useState } from "react"
import { NavLink } from "react-router-dom"

import { Container } from "./style"

import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaPopIcon } from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'

import menuImg from '../../assets/menu.svg'

export function Sidebar() {

    const [menuState, setMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setMenuOpen(!menuState)
    }

    return <Container isMenuState = {menuState}>
        <button>
            <img src={menuImg} alt="open and close sidebar" onClick={handleToggleMenu} />
        </button>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" >
                        <BurgerIcon />
                        <span>Hamburgueres</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/pizzas">
                        <PizzaIcon />
                        <span>Pizzas</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/bebidas">
                        <SodaPopIcon />
                        <span>Bebidas</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sobremesas'>
                        <IceCreamIcon />
                        <span>Sobremesas</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </Container>
}