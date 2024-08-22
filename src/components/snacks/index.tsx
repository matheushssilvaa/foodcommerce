import { Container } from "./style"
import { FiPlus } from 'react-icons/fi'
import { currencyFormat } from "../../helpers/currencyFormat"
import { SkeletonSnack } from "./skeletonSnack"
import { SnackData } from "../../interfaces/SnackData"

import { useCart } from "../../hooks/useCart"

interface SnackProps {
    snacks: SnackData[]
}

export function Snacks({ snacks }: SnackProps) {
    const { cart, addSnackIntoCart } = useCart()

    return (
        <Container>
            {!snacks.length ? ([1, 2, 3, 4].map((n) => <SkeletonSnack key={n} />)) : (
                snacks.map((snack) => {
                    const snackExistents = cart.find((item) => item.snack ===  snack.snack && item.id === snack.id)

                    return (
                        <div key={snack.id} className="snack">
                            {snackExistents && <span>{snackExistents.quantity}</span>}
                            <h2>{snack.name}</h2>
                            <img src={snack.image} />
                            <p>{snack.description}</p>
                            <div>
                                <strong>{currencyFormat(snack.price)}</strong>
                                <button type="button" onClick={() => addSnackIntoCart(snack)}>
                                    <FiPlus />
                                </button>
                            </div>
                        </div>
                    )
                }
                ))}
        </Container>
    )
}