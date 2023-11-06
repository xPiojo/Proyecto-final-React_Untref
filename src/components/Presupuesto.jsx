import presupuestoStyle from '../styles/Presupuesto.module.css';

export const Presupuesto = (propiedades) => {
  return (
    <li className={presupuestoStyle['presupuesto-item']}>
        <p>Fecha: {propiedades.date}</p>
        <p>Propiedad: {propiedades.property}</p>
        <p>Ubicación: {propiedades.location}</p>
        <p>Metros cuadrados: {propiedades.squareMeters}</p>
        <p>Póliza mensual: ${propiedades.estimatedPrice}</p>
    </li>
  )
}
