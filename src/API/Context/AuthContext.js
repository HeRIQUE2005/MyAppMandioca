import { createContext, useState } from "react";
import ApiMandioca from "../ApiMandioca";
import { toast } from "react-toastify";

export const AutenticadoContexto = createContext()

export default function AuthProvider({children}) {

    const [tokenT, setToken] = useState(false)
    const [token, setToken] = useState('')

    const autenticado =  !!tokenT

    async function verificarToken() {
        const iToken = localStorage.getItem('@token')

        if (!iToken) {
            setToken(false)
            return
        }
        const tokenU = JSON.parse(iToken)
        setToken(tokenU)
    }
}