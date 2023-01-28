import styled from "styled-components"
import { HiPlusCircle } from "react-icons/hi"
import { IconContext } from "react-icons"

export default function CardProduct({ product, func }) {
    const { name, description, imgURL } = product

    return (
        <CardContainer onClick={func}>
            <img src={imgURL} alt="Imagem" />
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <IconContext.Provider value={{ size: '3em', color: '#FFFF' }}>
                <HiPlusCircle />
            </IconContext.Provider>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    background-color: #F8C1C1;
    width: 100%;
    min-height: 100px;

    justify-content: space-between;
    align-items: center;

    margin-bottom: 30px;
    padding: 10px;

    border-radius: 15px;

    >div{
        display: flex;
        flex-direction: column;
        margin-left: 5px;
 
        height: 100%;
        width: 100%;

        >h2{
            margin-bottom: 5px;
            color: #F7F3D2;

            -webkit-text-stroke-width: 1.5px;
            -webkit-text-stroke-color: #9E7972;
        }
        >p{
            color: #513724;
        }
    }

    >img{
        width: 100px;
        height: 80px;

        border-radius: 15px;

        object-fit: cover;
    }
`