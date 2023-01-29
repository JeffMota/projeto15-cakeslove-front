import styled from "styled-components"
import Logo from '../assets/img/Logo.png'
import TitlePage from "../components/TitlePage"
import { IconContext } from "react-icons"
import { TbLogout } from "react-icons/tb"
import { BiUserCircle } from "react-icons/bi"

export default function UserPage() {

    return (
        <UserPageContainer>
            <NavContainer>
                <LogoContainer>
                    <img src={Logo} alt='Logo' />
                    <h1>Cake's Love</h1>
                </LogoContainer>
                <UserIcon>
                    <IconContext.Provider value={{ size: '3.5em', color: '#FFFFFF' }}>
                        <TbLogout />
                    </IconContext.Provider>
                </UserIcon>
            </NavContainer>
            <TitlePage title="Meus dados" />
            <UserIconPage>
                <IconContext.Provider value={{ size: '100%', color: '#F8C1C1' }}>
                    <BiUserCircle />
                </IconContext.Provider>
            </UserIconPage>
            <h2>Seus dados serão mostrados aqui em breve</h2>
        </UserPageContainer>
    )
}

const UserPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F7F3D2;
    width: 100vw;
    min-height: 100vh;

    padding: 150px 0;
    align-items: center;

    overflow-y: scroll;

    >h2{
        margin: 20px 0;
        color: #FA9D9D;

        width: 90%;
    }

    >button{
        margin-top: 20px;

        height: 50px;
        width: 200px;

        font-size: 16px;
        color: #513724;

        border: none;
        border-radius: 20px;

        background-color: #F8C1C1;
    }
`
const UserIconPage = styled.div`
    display: flex;
    width: 150px;
    height: 150px;
    border-radius: 50%;

    background-color: #FFFF;
`

//NavBar
const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFFF;
    font-size: 12px;
    padding: 0 20px;

    position: fixed;
    left: 0;
    top: 0;

    z-index: 1;

    border-radius: 0 0 10px 10px;

    font-family: 'IM Fell English SC', serif;

    background-color: #F8C1C1;
    height: 85px;
    width: 100vw;
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 240px;
    height: 100%;
    >img{
            height: 80%;
        }
`
const UserIcon = styled.div`
    border-radius: 50%;
    height: 70%;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
`