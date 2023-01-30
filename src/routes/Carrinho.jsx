import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import NavBar from "../components/NavBar"
import TitlePage from "../components/TitlePage"
import { PagesContext } from "../contexts/PagesContext"
import CardProduCarrinho from "../components/CardProduCarrinho"
import PopUp from "../components/PopUp"
import PopConfirmar from "../components/PopConfirmar"
import { useNavigate } from "react-router-dom"


export default function CarrinhoTela() {
    const { carrinho, setCarrinho, selected, setSelected, setValorTotal, selecting, setSelecting } = useContext(PagesContext)

    const [total, setTotal] = useState(0)
    const buttons = ['Pix', 'Dinheiro', 'Cartão']
    const msgRetirada = "Agradecemos a preferência! Seu Pedido já está esperando por você!"
    const msgEntrega = "Agradecemos a preferência! Seu Pedido já está esperando por você!"

    const navigate = useNavigate()

    useEffect(() => {
        setSelecting(false)

        let aux = total
        carrinho.forEach(p => {
            aux = aux + Number(p.price)
        })
        setTotal(aux)
        setValorTotal(aux)
    }, [])

    function delItem(product) {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Deseja remover esse item?')) {
            let aux = []
            let cont = 0

            if (carrinho.length === 1) {
                setCarrinho([])
                navigate('/home')
                return
            }

            //procurando produtos repetidos
            for (let i = 0; i < carrinho.length; i++) {
                for (let j = i + 1; j < carrinho.length; j++) {
                    if (carrinho[i].name === carrinho[j].name) {
                        cont = 0
                    } else cont = 1
                }
            }

            //removendo um único produto repetido
            carrinho.forEach(p => {
                if (p.name !== product.name) {
                    aux.push(p)
                }
                else {
                    if (cont === 0) {
                        aux.push(p)
                        cont += 1
                    }
                }
            })
            setCarrinho(aux)
            let j = total - Number(product.price)
            setTotal(j)
            setValorTotal(j)
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
                <Preco>
                    <p>Total</p>
                    <div>{String(total.toFixed(2)).replace('.', ',')}</div>
                </Preco>
            </CarrinhoBox>
            <PagamentoBox>
                <h2>Forma de pagamento</h2>
                <div>
                    {buttons.map(b =>
                        <PagButton onClick={() => setSelected(b)} key={b} selected={(selected === b) ? true : false} >
                            {b}
                        </PagButton>)}
                </div>
            </PagamentoBox>
            <ButtonsContainer>
                <button onClick={() => navigate('/entrega')}>Entregar</button>
                <button onClick={() => setSelecting(true)}>Retirar</button>
            </ButtonsContainer>
            {(selecting) &&
                <PopUp setSelecting={setSelecting} >
                    <PopConfirmar setSelecting={setSelecting} delivery={false} pagamento={selected} total={total} />
                </PopUp>}
        </CarrinhoContainer>
    )
}

const CarrinhoContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F7F3D2;
    width: 100vw;
    min-height: 100vh;

    padding: 150px 0;
    align-items: center;

    overflow-y: scroll;

`
const CarrinhoBox = styled.div`
    border: none;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    padding: 20px 0;

    max-height: 330px;

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
const Preco = styled.div`
    font-weight: 700;
    color: #513724;
    font-size: 20px;

    display: flex;
    width: 90%;
    margin-top: 10px;
    justify-content: space-between;

`
const PagamentoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    height: 200px;
    color:#513724;

    margin-top: 30px;
    
    >div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        border: 2px solid #89E0E0;
        border-radius: 10px;
        height: 150px;
        width: 100%;
    }
`
const PagButton = styled.button`
    background-color: ${props => (props.selected) ? '#F8C1C1' : '#89E0E0'};
    width: 60%;
    height: 30px;
    color: #FFFF;
    font-size: 16px;

    border: none;
    border-radius: 10px;
`
const ButtonsContainer = styled.div`
    margin-top: 50px;

    display: flex;
    width: 90%;
    justify-content: space-between;

    >button{
        color: #513724;
        font-size: 20px;
        width: 150px;
        height: 60px;
        border-radius: 20px;
    }
    >:nth-child(1){
        border: 2px solid #F8C1C1;
        background-color: #F7F3D2;
    }
    >:nth-child(2){
        border: none;
        background-color: #F8C1C1;
    }

`