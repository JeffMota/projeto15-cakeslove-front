import { useContext, useState } from "react"
import styled from "styled-components"
import NavBar from "../components/NavBar"
import TitlePage from "../components/TitlePage"
import { PagesContext } from "../contexts/PagesContext"
import PopUp from "../components/PopUp"
import PopConfirmar from "../components/PopConfirmar"

export default function Entrega() {
    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [referencia, setReferencia] = useState('')

    const [selecting, setSelecting, total, carrinho, selected] = useContext(PagesContext)

    return (
        <EntragaContainer>
            <NavBar />
            <TitlePage title="Local de Entrega" />
            <FormEntrega>
                <input onChange={(e) => setNome(e.target.value)} placeholder="Nome" type="text" />
                <input onChange={(e) => setEndereco(e.target.value)} placeholder="Endereço" type="text" />
                <input onChange={(e) => setReferencia(e.target.value)} placeholder="Referência" type="text" />
                <button type="submit" >Confirmar</button>
            </FormEntrega>
            {(selecting) &&
                <PopUp setSelecting={setSelecting} >
                    <PopConfirmar setSelecting={setSelecting} pagamento={selected} total={total} carrinho={carrinho} />
                </PopUp>}
        </EntragaContainer>
    )
}

const EntragaContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F7F3D2;
    width: 100vw;
    min-height: 100vh;

    padding: 150px 0;
    align-items: center;

    overflow-y: scroll;
`
const FormEntrega = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin-top: 50px;

    height: 250px;
    width: 80%;

    >input{
        padding: 0 20px;
        border: none;
        border-radius: 10px;
        width: 100%;

        background-color: #89E0E0;
        height: 44px;

        box-shadow: 0px 5px 5px rgba(0,0,0,0.3);
    }
    >button{
        width: 150px;
        height: 40px;

        border-radius: 20px;
        border: none;

        font-weight: 700;
        font-size: 20px;
        color: #FFFF;
        background-color: #F8C1C1;
    }
`