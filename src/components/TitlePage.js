import styled from "styled-components"
import { IoChevronBackSharp } from 'react-icons/io5'
import { IconContext } from "react-icons"
import { useNavigate } from "react-router-dom"

export default function TitlePage({ title }) {
    const navigate = useNavigate()

    return (
        <TitleContainer>
            <Icon onClick={() => navigate('/home')}>
                <IconContext.Provider value={{ size: '2.5em', color: '#F8C1C1' }}>
                    <IoChevronBackSharp />
                </IconContext.Provider>
            </Icon>
            <h2>{title}</h2>
        </TitleContainer>
    )
}

const TitleContainer = styled.div`
    display: flex;
    position: fixed;
    top: 80px;
    width: 100vw;
    height: 60px;

    justify-content: center;
    align-items: flex-end;

    z-index: 0.5;

    font-size: 16px;
    color: #FA9D9D;
    background-color: #F7F3D2;

    >h2{
        margin-bottom: 10px;
    }
`
const Icon = styled.div`
    position: absolute;
    left: 20px;
`
