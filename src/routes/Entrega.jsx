import styled from "styled-components"
import NavBar from "../components/NavBar"
import TitlePage from "../components/TitlePage"

export default function Entrega() {
    return (
        <EntragaContainer>
            <NavBar />
            <TitlePage title="Local de Entrega" />
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