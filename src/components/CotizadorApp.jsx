import { useEffect, useState } from "react";
import { Opciones } from "./Opciones";
import { useCotizador } from "../hooks/useCotizador";
import { errorAlert } from "../helpers/alertHandler";
import { successAlert } from "../helpers/alertHandler";
import { FaRegSave } from "react-icons/fa";
import { useHistorial } from "../hooks/useHistorial";
import { saveToLocalStorage } from '../helpers/localStorageHelper';


export const CotizadorApp = () => {
    const [estimatedPrice, setEstimatedPrice] = useState(0.00)
    const [data, setData] = useState([])
    const { elements, setElementos } = useCotizador()
    const { presupuestos, setPresupuestos } = useHistorial()


    useEffect(() => {
        resetState();
        const leer = async () => setData(await (await fetch("/data.json")).json());
        leer();
      }, []);
      


    const calculateQuote = () => {
        const { property, location, squareMeters } = elements;
        // Validación
        if (!property || !location || squareMeters <= 0) {
            errorAlert();
            return;
        }
        // Costo por metro cuadrado
        const costPerSquareMeter = 35.86;
        // Calcula el costo de la cotización
        const quote = squareMeters * costPerSquareMeter * property * location;
        // Actualiza el estado con la cotización estimada y muestra el resultado
        setEstimatedPrice(quote);
        successAlert()
    };

    const resetState = () => {
        setElementos({ property: 0, location: 0, squareMeters: 0 });
        setEstimatedPrice(0.0);
      };
      

    return (
        <section>
            <form onSubmit={(e) => { e.preventDefault() }}>
                <h2>Completa los datos solicitados</h2>
                <Opciones data={data.filter((item) => item.categoria === "propiedad")} label={"Selecciona el tipo de propiedad"} type={"property"} />
                <br />
                <Opciones data={data.filter((item) => item.categoria === "ubicacion")} label={"Selecciona la ubicación"} type={"location"} />
                <br />
                <label htmlFor="squareMeters">
                    Ingrese los Metros cuadrados:
                    <input
                        type="number"
                        id="squareMeters"
                        placeholder="20"
                        onInput={(e) => setElementos({
                            ...elements, squareMeters: isNaN(parseFloat(e.target.value))
                                ? 0
                                : parseFloat(e.target.value)
                        })}
                        required
                        max={600}
                        min={1}
                    />
                </label>
                <button
                    type="button"
                    onClick={calculateQuote}
                >
                    Cotizar
                </button>
            </form >

            <form onSubmit={(e) => {
                    e.preventDefault();
                    saveToLocalStorage(elements, data, estimatedPrice, setEstimatedPrice, setPresupuestos, presupuestos); 
                }}
            >
                <p>
                    Precio Estimado: <span>${estimatedPrice.toFixed(2)}</span>
                </p>
                {estimatedPrice > 0 && (
                    <button
                        type="submit"
                        title="Guardar Cotización"
                    >
                        <FaRegSave />
                    </button>
                )}
            </form>
        </section>
    );
};
