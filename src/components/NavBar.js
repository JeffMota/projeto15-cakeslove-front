import styled from 'styled-components'
import Logo from '../assets/img/Logo.png'
import { BiUserCircle } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
    const navigate = useNavigate()

    function userPage() {
        if (localStorage.getItem('admin') === 'true') {
            navigate('/admin-page')
        }
        navigate('/user-page')
    }

    return (
        <NavContainer>
            <LogoContainer>
                <img src={Logo} alt='Logo' />
                <h1>Cake's Love</h1>
            </LogoContainer>
            <UserIcon onClick={userPage}>
                <IconContext.Provider value={{ size: '3em', color: '#F8C1C1' }}>
                    <BiUserCircle />
                </IconContext.Provider>
            </UserIcon>
        </NavContainer>
    )
}

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
    background-color: #FFFF;
`