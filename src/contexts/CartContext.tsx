import { ReactNode, createContext, useEffect, useState } from "react";
import { SnackData } from "../interfaces/SnackData";
import { toast } from "react-toastify";

interface Snack extends SnackData {
    quantity: number,
    subtotal: number
}

interface RemoveSnackFromCart {
    id: number,
    snack: string
}

interface UpdateCartProps {
    id: number,
    snack: string,
    newQuantity: number
}

interface CartContextProps {
    cart: Snack[]
    addSnackIntoCart: (snack: SnackData) => void
    removeSnackFromCart: ({ id, snack }: RemoveSnackFromCart) => void
    updateCart: ({ id, snack, newQuantity }: UpdateCartProps) => void
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps ) {
    const [cart, setCart] = useState<Snack[]>([])

    function addSnackIntoCart(snack: SnackData): void {
        // buscar
        const snackExistsInCart = cart.find((item) => item.snack == snack.snack && item.id === snack.id)

        // atualizar
        if(snackExistsInCart) {
            const newCart = cart.map((item) => {
                if(item.id === snack.id) {
                    const quantity = item.quantity + 1
                    const subtotal = item.price * quantity

                    return { ...item, quantity, subtotal }
                }

                return item;
            })

            toast.success(`outro(a) ${snack.snack} adicionado`)
            setCart(newCart);

            return
        }

        const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
        const newCart = [...cart, newSnack]; // push de um array

        console.log(`newCart`, newCart)

        setCart(newCart);
    }

    function removeSnackFromCart(snack: RemoveSnackFromCart): void {
        // Encontrar o índice do snack a ser removido
        const snackIndex = cart.findIndex((item) => item.id === snack.id);
    
        // Se o snack for encontrado, removê-lo do carrinho
        if (snackIndex !== -1) {
            const newCart = cart.filter((_, index) => index !== snackIndex);
            setCart(newCart);
            toast.success(`${snack.snack} removido do carrinho`);
        } else {
            toast.error(`${snack.snack} não encontrado no carrinho`);
        }
    }

        function updateCart({id, snack, newQuantity}: UpdateCartProps): void {
            // Verifica se a nova quantidade é válida
            if (newQuantity <= 0) {
                console.error("A quantidade deve ser maior que zero.");
                return;
            }
        
            // Atualiza o carrinho
            const newCart = cart.map((item) => {
                if (item.id === id && item.snack === snack) {
                    // Calcula o novo subtotal
                    const subtotal = item.price * newQuantity;
        
                    return { ...item, quantity: newQuantity, subtotal };
                }
        
                return item;
            });
        
            // Verifica se o item foi atualizado no carrinho
            const itemUpdated = newCart.some((item) => item.id === id && item.snack === snack);
        
            if (!itemUpdated) {
                console.error("Item não encontrado no carrinho.");
                return;
            }
        
            setCart(newCart);
        } 

    return(
        <CartContext.Provider value={{ cart, addSnackIntoCart, removeSnackFromCart, updateCart}}>
            { children }
        </CartContext.Provider>
    )}