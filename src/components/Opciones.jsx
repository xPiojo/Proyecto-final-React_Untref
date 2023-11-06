import { useCotizador } from "../hooks/useCotizador";

export const Opciones = ({ data, label, type }) => {
  const { elements, setElementos } = useCotizador()
  return (
    <>
      <label htmlFor={type}>{label}</label>
      <select name={type} id={type} defaultValue={0} onChange={(e) => setElementos({
        ...elements, [type]: isNaN(parseFloat(e.target.value)) ? 0
          : parseFloat(e.target.value)
      })}>
        <option disabled value={0}>
          ...
        </option>
        {data.map((elemento, indice) => (
          <option key={indice} value={elemento.factor}>
            {elemento.tipo}
          </option>
        ))}
      </select>
    </>
  );
}