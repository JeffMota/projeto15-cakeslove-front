import styled from "styled-components"

export default function Button({ text, func }) {
    return (
        <ButtonContainer onClick={func}>
            {text}
        </ButtonContainer>
    )
}

const ButtonContainer = styled.button`
    width: 298px;
    height: 44px;
    background-color: #89E0E0;

    font-family: 'Roboto', sans-serif;

    font-weight: 700;
    font-size: 24px;
    color: #FFFF;

    border-radius: 15px;
    border: none;
`