import { useCart } from "../../../../hooks/useCart"
import { currencyFormat } from "../../../../helpers/currencyFormat"
import { FiPlus, FiMinus, FiX } from 'react-icons/fi'
import { Container } from "./style"

export function TableDesktop() {
    const { cart, removeSnackFromCart, updateCart } = useCart()

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Lanche</th>
                        <th>Quantidade</th>
                        <th>Subtotal</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item) => (
                            <tr key={`${item.snack} - ${item.id}`}>
                                <td>
                                    <img src={item.image} alt={item.name} />
                                </td>
                                <td>
                                    <h4>{item.name}</h4>
                                    <span>{currencyFormat(item.price)}</span>
                                </td>
                                <td>
                                    <a onClick={() => updateCart({ id: item.id, snack: item.snack, newQuantity: item.quantity + 1 })}>
                                        <FiPlus size={25} />
                                    </a>
                                    <span className="quantity">
                                        {item.quantity}
                                    </span>
                                    <a onClick={() => updateCart({ id: item.id, snack: item.snack, newQuantity: item.quantity - 1 })}>
                                        <FiMinus size={25} />
                                    </a>
                                </td>
                                <td>
                                    <h5>{currencyFormat(item.subtotal)}</h5>
                                </td>
                                <td>
                                    <a onClick={() => removeSnackFromCart({ id: item.id, snack: item.snack })}>
                                        <FiX size={25} />
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}