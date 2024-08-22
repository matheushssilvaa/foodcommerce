import { Head } from "../../../components/head";
import { SnackTitle } from '../../../components/snackTitle'
import { Snacks } from "../../../components/snacks";
import { useSnack } from "../../../hooks/useSnack";

export default function Bebidas () {

    const { drinks } = useSnack()

    return (
        <>
        <Head title="Hamburgueres" />
        <SnackTitle>Bebidas</SnackTitle>
        <Snacks snacks={drinks} />
    </>
    )
}