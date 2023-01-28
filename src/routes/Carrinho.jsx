import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import NavBar from "../components/NavBar"
import TitlePage from "../components/TitlePage"
import { PagesContext } from "../contexts/PagesContext"
import CardProduCarrinho from "../components/CardProduCarrinho"

export default function CarrinhoTela() {
    const [carrinho, setCarrinho] = useContext(PagesContext)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let aux = total
        carrinho.map(p => {
            aux = total + Number(p.price)
            setTotal(aux)
        })
    }, [])

    function delItem(product) {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Deseja remover esse item?')) {
            let aux = carrinho.filter(p => p.name !== product.name)
            setCarrinho(aux)
        }
    }

    return (
        <CarrinhoContainer>
            <NavBar />
            <TitlePage title={'Confirme seu pedido'} />
            <CarrinhoBox >
                <ContainerCarrinhoBox>
                    {carrinho.map((p, index) =>
                        <CardProduCarrinho
                            key={index}
                            product={p}
                            func={() => delItem(p)}
                        />)
                    }
                </ContainerCarrinhoBox>
                <div>
                    <p>Total</p>
                    <div>{total}</div>
                </div>
            </CarrinhoBox>
        </CarrinhoContainer>
    )
}

const CarrinhoContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F7F3D2;
    width: 100vw;
    height: 100vh;

    padding-top: 40px;

    justify-content: center;
    align-items: center;

    overflow-y: scroll;

`
const CarrinhoBox = styled.div`
    border: none;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    padding: 20px 0;

    max-height: 350px;

    overflow-y: scroll;

    background-color: #89E0E0;

`
const ContainerCarrinhoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 90%;

    overflow-y: scroll;
`