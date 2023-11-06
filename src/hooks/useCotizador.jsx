import { useContext } from 'react'
import { CotizadorContext } from '../context/CotizadorContext'

export const useCotizador = () => useContext(CotizadorContext)
