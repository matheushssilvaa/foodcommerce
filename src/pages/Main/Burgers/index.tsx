import { Head } from "../../../components/head";
import { SnackTitle } from '../../../components/snackTitle';
import { Snacks } from "../../../components/snacks";
import { useSnack } from "../../../hooks/useSnack";

export default function Burgers () {

    const { burgers } = useSnack()

    return (
        <>
        <Head title="Hamburgueres" />
        <SnackTitle>Hamburgueres</SnackTitle>
        <Snacks snacks={burgers}></Snacks>
    </>
    )
}