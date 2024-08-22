import OrderHeader from "../../components/OrderHeader";
import { Head } from "../../components/head";
import { Container } from "./style";
import { Table } from "./table";

export default function MyCartPage(){
    return (
        <Container>
            <Head title="Carrinho"></Head>
            <OrderHeader  />
            <Table />
        </Container>
    )
}