import { infoAlert } from "../helpers/alertHandler";

export const saveToLocalStorage = (elements, data, estimatedPrice, setEstimatedPrice, setPresupuestos, presupuestos) => {
    const { property, location, squareMeters } = elements;
    const currentDate = new Date().toLocaleString();

    // Encuentra el nombre de la propiedad y ubicación utilizando el factor
    const propertyName = data.find(
        (item) => item.categoria === "propiedad" && item.factor === property
    )?.tipo;
    const locationName = data.find(
        (item) => item.categoria === "ubicacion" && item.factor === location
    )?.tipo;

    const newQuote = {
        date: currentDate,
        property: propertyName,
        location: locationName,
        squareMeters: squareMeters,
        estimatedPrice: estimatedPrice.toFixed(2),
    };

    // Agregar el nuevo presupuesto a la lista de presupuestos
    setPresupuestos([...presupuestos, newQuote]);
    setEstimatedPrice(0)
    infoAlert()
};
