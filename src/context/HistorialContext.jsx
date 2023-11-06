import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const HistorialContext = createContext([])

export const HistorialProvider = ({ children }) => {
    const [presupuestos, setPresupuestos] = useLocalStorage("presupuestos", [])

    const historialContextValue = {
        presupuestos,
        setPresupuestos
    };

    return (
        <HistorialContext.Provider value={historialContextValue}>
            {children}
        </HistorialContext.Provider>
    );
};