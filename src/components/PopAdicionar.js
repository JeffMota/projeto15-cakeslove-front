import { useState, useContext } from "react"
import styled from "styled-components"
import Button from "./Button"
import { PagesContext } from "../contexts/PagesContext"

export default function PopAdicionar({ product, setSelecting }) {
    const [quant, setQuant] = useState(1)
    const [carrinho, setCarrinho] = useContext(PagesContext)

    function adicionaCarrinho() {
        let aux = [...carrinho]
        for (let i = 0; i < quant; i++) {
            aux.push(product)
        }
        setCarrinho(aux)
        setSelecting(false)
    }

    return (
        <PopContainer>
            <h2>{product.name} - {product.price}</h2>
            <div>
                <button onClick={() => setQuant(quant - 1)} >-</button>
                <p>{quant}</p>
                <button onClick={() => setQuant(quant + 1)}>+</button>
            </div>
            <Button func={adicionaCarrinho} text="Adicionar ao carrinho" />
        </PopContainer>
    )
}

const PopContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;
    padding: 20px 0;

    background-color: #FFFF;
    width: 90%;
    height: 187px;
    max-width: 370px;

    z-index: 1;

    border-radius: 40px;

    position: fixed;
    top: 200px;

    color: #605343;

    >div{
        display: flex;
        margin: 10px;

        border: 2px solid black;
        border-radius: 10px;

        width: 60%;
        height: 35px;

        justify-content: space-between;
        align-items: center;

        padding: 0 10px;

        >button{
            width: 24px;
            aspect-ratio: 1/1;

            border-radius: 50%;
            border: none;

            background-color: #FA9D9D;

            color: #FFFF;
            font-size: 20px;
        }
    }
`