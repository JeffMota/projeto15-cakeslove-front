import { useContext, useState } from "react"
import styled from "styled-components"
import NavBar from "../components/NavBar"
import TitlePage from "../components/TitlePage"
import { useNavigate } from "react-router-dom"
import { PagesContext } from "../contexts/PagesContext"

export default function Entrega() {
    const { name } = useContext(PagesContext)
    const [telefone, setTelefone] = useState('')
    const [descricao, setDescricao] = useState('')
    const navigate = useNavigate()

    function confirmarPedido(e) {
        e.preventDefault()
        navigate('/concluidoe')
    }

    return (
        <OrcamentoContainer>
            <NavBar />
            <TitlePage title="Solicite o seu orçamento" />
            <FormOrcamento onSubmit={(e) => confirmarPedido(e)}>
                <NameDiv>Nome: &nbsp;&nbsp;<b>{name}</b></NameDiv>
                <NormalInput required onChange={(e) => setTelefone(e.target.value)} placeholder="Whatsapp" type="tel" />
                <BigInput required onChange={(e) => setDescricao(e.target.value)} placeholder="Descreva o seu pedido" type="text" />
                <button type="submit">Enviar</button>
            </FormOrcamento>
        <Acknowledgment>Agradecemos a</Acknowledgment>
        <Acknowledgment>preferência!</Acknowledgment>
        </OrcamentoContainer>
    )
}

const OrcamentoContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F7F3D2;
    width: 100vw;
    min-height: 100vh;
    padding: 150px 0;
    align-items: center;
    overflow-y: scroll;
`
const FormOrcamento = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 35px;
    margin-bottom:36px;
    width: 80%;
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

const Acknowledgment = styled.h1`
    font-weight: 218;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #513724;
    font-stretch: 81;
`

const BigInput = styled.input`
        padding: 23px;
        border: none;
        border-radius: 10px;
        width: 100%;
        background-color: #89E0E0;
        height: 139px;
        box-shadow: 0px 5px 5px rgba(0,0,0,0.3);
        margin-bottom: 37px;
        display:flex;
        flex-wrap: wrap;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        &::placeholder{
            position: absolute;
            top: 15px; 
            left: 20px;
        }
`
const NormalInput = styled.input`
        padding: 0 23px;
        border: none;
        border-radius: 10px;
        width: 100%;
        background-color: #89E0E0;
        height: 44px;
        box-shadow: 0px 5px 5px rgba(0,0,0,0.3);
        margin-bottom: 37px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
`

const NameDiv = styled.div`
        padding: 0 23px;
        border: none;
        border-radius: 10px;
        width: 100%;
        background-color: #89E0E0;
        height: 44px;
        box-shadow: 0px 5px 5px rgba(0,0,0,0.3);
        margin-bottom: 37px;
        display:flex;
        align-items:center;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
`