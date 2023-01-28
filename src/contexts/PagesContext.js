import { createContext, useState } from "react";

export const PagesContext = createContext()

export default function PagesContextProvider({ children }) {
    const [carrinho, setCarrinho] = useState([])

    return (
        <PagesContext.Provider value={[carrinho, setCarrinho]}>
            {children}
        </PagesContext.Provider>
    )
}