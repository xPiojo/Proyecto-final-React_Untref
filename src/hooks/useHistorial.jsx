import { useContext } from "react";
import { HistorialContext } from "../context/HistorialContext";

export const useHistorial = () => useContext(HistorialContext)
