import { createContext, useState } from "react";

export const PagesContext = createContext()

export default function PagesContextProvider({ children }) {
    const [carrinho, setCarrinho] = useState([])
    const [total, setTotal] = useState(0)
    const [selected, setSelected] = useState('Dinheiro')

    return (
        <PagesContext.Provider value={[carrinho, setCarrinho, total, setTotal, selected, setSelected]}>
            {children}
        </PagesContext.Provider>
    )
}