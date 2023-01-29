import dayjs from "dayjs"
import styled from "styled-components"

export default function PopConfirmar({ carrinho, total, pagamento, setSelecting }) {
    function enviarPedido() {
        const body = {
            products: carrinho,
            date: dayjs().format('DD/MM/YYYY'),
            payment: pagamento,
            price: total,
            delivey: false
        }

        console.log(body)
    }

    return (
        <PopContainer>
            <h2>Confirme o seu pedido</h2>
            <Lista>
                {carrinho.map((p, index) =>
                    <div key={index}>
                        <p>{p.name}</p><p>R$ {(String(p.price)).replace('.', ',')}</p>
                    </div>)}
            </Lista>
            <Preco>
                <p>Total</p>
                <p>R$ {(String(total.toFixed(2))).replace('.', ',')}</p>
            </Preco>
            <Pagamento>
                <p>Forma de pagamento</p>
                <p>{pagamento}</p>
            </Pagamento>
            <ButtonsContainer>
                <button onClick={() => setSelecting(false)}>Cancelar</button>
                <button onClick={enviarPedido} >Confirmar</button>
            </ButtonsContainer>
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
    min-height: 187px;
    max-width: 370px;

    z-index: 2;

    border-radius: 40px;

    position: fixed;
    top: 200px;

    color: #605343;
    font-size: 18px;
`
const Preco = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
`
const Lista = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 10px 0;

    >div{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
`
const Pagamento = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 10px 0;
`
const ButtonsContainer = styled.div`
    margin-top: 10px;

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