import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/img/Logo.png'

export default function ConcluidoE() {
    const navigate = useNavigate()

    return (
        <ConcContainer>
            <img src={Logo} alt="Logo" />
            <p>Agradecemos a preferência! Retornaremos o contato assim que possível!</p>
            <button onClick={() => navigate('/home')}>Home</button>
        </ConcContainer>
    )
}

const ConcContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    color: #513724;
    font-size: 20px;

    background-color: #F8C1C1;

    >img{
        width: 60%;
        margin-bottom: 25px;
    }

    >p{
        text-align: center;
        width: 80%;
        margin-bottom: 30px;
    }

    >button{
        border: none;
        border-radius: 20px;
        
        color: #FFFF;
        font-size: 20px;
        background-color: #89E0E0;
        width: 120px;
        height: 40px;
    }
`