import { createContext, useState } from "react";

export const PagesContext = createContext()

export default function PagesContextProvider({ children }) {
    const [carrinho, setCarrinho] = useState([])
    const [selected, setSelected] = useState('Dinheiro')

    return (
        <PagesContext.Provider value={[carrinho, setCarrinho, selected, setSelected]}>
            {children}
        </PagesContext.Provider>
    )
}