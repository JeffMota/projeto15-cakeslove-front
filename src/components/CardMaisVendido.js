import styled from "styled-components"

export default function CardMaisVendido({ name, imgURL, func }) {
    return (
        <MaisVendidoContainer onClick={func}>
            <img src={imgURL} alt='Imagem Produto' />
            <h2>{name}</h2>
        </MaisVendidoContainer>
    )
}

const MaisVendidoContainer = styled.div`
    display: flex;
    margin-left: 20px;
    padding: 15px 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    border-radius: 15px;
    font-size: 13px;
    color: #FFFF;

    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: #9E7972;

    display: flex;
    height: 162px;
    min-width: 180px;

    background-color: #F8C1C1;


        >img{
            width: 80%;
            height: 70%;

            border-radius: 15px;

            object-fit: cover;
        }
`