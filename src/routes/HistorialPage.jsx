import { Header } from '../components/Header';
import { Presupuesto } from '../components/Presupuesto';
import { useHistorial } from "../hooks/useHistorial";

export const HistorialPage = () => {
  const { presupuestos, setPresupuestos } = useHistorial()

  return (
    <>
      <Header title={"Historial de Cotizaciones"}></Header>
      

      <ul>
        {presupuestos.map((element, indice) => <Presupuesto key={indice} {...element}/>)}
      </ul>

    </>
  );
};


