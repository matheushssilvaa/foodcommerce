import { Head } from "../../../components/head";
import { SnackTitle } from '../../../components/snackTitle'
import { Snacks } from "../../../components/snacks";
import { useSnack } from "../../../hooks/useSnack";

export default function Pizzas () {

    const { pizzas } = useSnack()

    return (
        <>
        <Head title="Hamburgueres" />
        <SnackTitle>Pizzas</SnackTitle>
        <Snacks snacks={pizzas}></Snacks>
    </>
    )
}