import { Head } from "../../../components/head";
import { SnackTitle } from '../../../components/snackTitle'
import { Snacks } from "../../../components/snacks";
import { SnackContext } from "../../../contexts/SnackContext";
import { useSnack } from "../../../hooks/useSnack";

export default function Sobremesas () {

    const { iceCreams } = useSnack()

    return (
    <>
        <Head title="Hamburgueres" />
        <SnackTitle>Sobremesas</SnackTitle>
        <Snacks snacks={iceCreams}></Snacks>
    </>
    )
}