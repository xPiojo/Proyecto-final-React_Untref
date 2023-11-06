import { CotizadorApp } from '../components/CotizadorApp';
import { Header } from '../components/Header';

export const HomePage = () => {
    return (
        <>
            <Header title={"Seguros del hogar"}></Header>

            <CotizadorApp></CotizadorApp>
        </>
    )
}
