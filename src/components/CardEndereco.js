import styled from "styled-components"
import { MdModeEdit } from "react-icons/md"
import { RiDeleteBin2Line } from "react-icons/ri"
import { IconContext } from "react-icons"

export default function CardEndereco({ rua, numero, referencia }) {
    return (
        <EnderecoContainer>
            <UserIcon>
                <IconContext.Provider value={{ size: '2em', color: '#89E0E0' }}>
                    <MdModeEdit />
                </IconContext.Provider>
            </UserIcon>
            <Infos>
                <div>
                    {rua}, {numero}
                </div>
                <p>{referencia}</p>
            </Infos>
            <UserIcon>
                <IconContext.Provider value={{ size: '2em', color: '#89E0E0' }}>
                    <RiDeleteBin2Line />
                </IconContext.Provider>
            </UserIcon>
        </EnderecoContainer>
    )
}

const EnderecoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;

    margin-bottom: 10px;

    width: 100%;
    height: 53px;

    border: 2px solid #F8C1C1;
    border-radius: 20px;
    background-color: #F7F3D2;
`

const UserIcon = styled.div`
    border-radius: 50%;
    height: 70%;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Infos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #513724;
`